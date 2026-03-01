const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'images', 'hero-farmer.png');
const outputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');

async function removeBackgroundFloodFill() {
    const image = sharp(inputPath);
    const { width, height } = await image.metadata();
    console.log(`Imagen: ${width}x${height}`);

    const rawBuffer = await image.ensureAlpha().raw().toBuffer();

    // --- Parámetros ---
    const bgThreshold = 240;  // Umbral para considerar un píxel como "fondo claro"
    const tolerance = 25;     // Tolerancia para color similar al fondo (flood-fill)

    // Función: ¿es este píxel "fondo claro"?
    function isBackground(idx) {
        const r = rawBuffer[idx];
        const g = rawBuffer[idx + 1];
        const b = rawBuffer[idx + 2];
        // Fondo blanco/gris claro/ligeramente verdoso (como el fondo campo borroso)
        return r > bgThreshold && g > bgThreshold && b > bgThreshold;
    }

    // Función: ¿es este píxel similar al píxel semilla?
    function isSimilar(idx, seedR, seedG, seedB) {
        const r = rawBuffer[idx];
        const g = rawBuffer[idx + 1];
        const b = rawBuffer[idx + 2];
        return (
            Math.abs(r - seedR) <= tolerance &&
            Math.abs(g - seedG) <= tolerance &&
            Math.abs(b - seedB) <= tolerance &&
            r > (bgThreshold - 30) && g > (bgThreshold - 30) && b > (bgThreshold - 30)
        );
    }

    const visited = new Uint8Array(width * height); // 0=no visitado, 1=visitado
    const toMakeTransparent = new Uint8Array(width * height);

    // Cola para BFS flood-fill
    const queue = [];

    // Sembrar desde todos los bordes
    function addBorderPixels() {
        for (let x = 0; x < width; x++) {
            // Fila superior
            const topIdx = (0 * width + x) * 4;
            if (!visited[0 * width + x] && isBackground(topIdx)) {
                queue.push(0 * width + x);
                visited[0 * width + x] = 1;
            }
            // Fila inferior
            const botIdx = ((height - 1) * width + x) * 4;
            if (!visited[(height - 1) * width + x] && isBackground(botIdx)) {
                queue.push((height - 1) * width + x);
                visited[(height - 1) * width + x] = 1;
            }
        }
        for (let y = 0; y < height; y++) {
            // Columna izquierda
            const leftIdx = (y * width + 0) * 4;
            if (!visited[y * width + 0] && isBackground(leftIdx)) {
                queue.push(y * width + 0);
                visited[y * width + 0] = 1;
            }
            // Columna derecha
            const rightIdx = (y * width + (width - 1)) * 4;
            if (!visited[y * width + (width - 1)] && isBackground(rightIdx)) {
                queue.push(y * width + (width - 1));
                visited[y * width + (width - 1)] = 1;
            }
        }
    }

    addBorderPixels();
    console.log(`Semillas desde bordes: ${queue.length}`);

    // BFS flood-fill
    let head = 0;
    while (head < queue.length) {
        const pixel = queue[head++];
        toMakeTransparent[pixel] = 1;

        const px = pixel % width;
        const py = Math.floor(pixel / width);
        const seedR = rawBuffer[pixel * 4];
        const seedG = rawBuffer[pixel * 4 + 1];
        const seedB = rawBuffer[pixel * 4 + 2];

        // 4-conectado: arriba, abajo, izquierda, derecha
        const neighbors = [
            py > 0 ? (py - 1) * width + px : -1,
            py < height - 1 ? (py + 1) * width + px : -1,
            px > 0 ? py * width + (px - 1) : -1,
            px < width - 1 ? py * width + (px + 1) : -1,
        ];

        for (const n of neighbors) {
            if (n < 0 || visited[n]) continue;
            const nIdx = n * 4;
            if (isSimilar(nIdx, seedR, seedG, seedB)) {
                visited[n] = 1;
                queue.push(n);
            }
        }
    }

    console.log(`Píxeles a hacer transparentes: ${queue.length}`);

    // Aplicar transparencia
    for (let i = 0; i < width * height; i++) {
        if (toMakeTransparent[i]) {
            rawBuffer[i * 4 + 3] = 0; // alpha = 0
        }
    }

    // Guardar resultado directamente (archivo diferente al input)
    await sharp(rawBuffer, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(outputPath);

    console.log('✅ Fondo eliminado con flood-fill. Archivo guardado:', outputPath);
}

removeBackgroundFloodFill().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
