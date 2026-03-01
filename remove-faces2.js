const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Usar la imagen ORIGINAL (sin procesar por remove-faces) para partir limpio
const inputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');

async function removePersonalSection() {
    const image = sharp(inputPath);
    const { width, height } = await image.metadata();
    console.log(`Imagen: ${width}x${height}`);

    const rawBuffer = await image.ensureAlpha().raw().toBuffer();

    // Pinta un rectángulo blanco (o transparente) sobre el área de "MI PERSONAL"
    // Basado en el mapa de cuadrícula (50px/celda):
    // La sección de MI PERSONAL (con avatares) está aproximadamente:
    // x: 585 - 740, y: 200 - 560

    function fillRect(x1, y1, x2, y2, r, g, b, a) {
        for (let py = y1; py <= y2; py++) {
            for (let px = x1; px <= x2; px++) {
                if (px >= 0 && px < width && py >= 0 && py < height) {
                    const idx = (py * width + px) * 4;
                    rawBuffer[idx] = r;
                    rawBuffer[idx + 1] = g;
                    rawBuffer[idx + 2] = b;
                    rawBuffer[idx + 3] = a;
                }
            }
        }
    }

    function fillCircle(cx, cy, radius, r, g, b, a) {
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const px = cx + dx;
                    const py = cy + dy;
                    if (px >= 0 && px < width && py >= 0 && py < height) {
                        const idx = (py * width + px) * 4;
                        rawBuffer[idx] = r;
                        rawBuffer[idx + 1] = g;
                        rawBuffer[idx + 2] = b;
                        rawBuffer[idx + 3] = a;
                    }
                }
            }
        }
    }

    // Cubrir toda la zona de "MI PERSONAL" con blanco (fondo de la app)
    // Área del panel: x 585-730, y 200-560
    fillRect(585, 200, 730, 560, 255, 255, 255, 255);

    // También el título "MI PERSONAL"
    fillRect(585, 195, 730, 225, 255, 255, 255, 255);

    // Guardar directamente (mismo archivo)
    const tmpPath = path.join(__dirname, 'public', 'images', 'hero-tmp.png');
    const outputPath = inputPath;

    await sharp(rawBuffer, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(tmpPath);

    // Pequeña espera para asegurar que el archivo se libere
    await new Promise(r => setTimeout(r, 500));

    fs.renameSync(tmpPath, outputPath);

    console.log('✅ Sección MI PERSONAL eliminada. Archivo guardado:', outputPath);
}

removePersonalSection().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
