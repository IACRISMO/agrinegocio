const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Usamos la imagen procesada (sin fondo)
const inputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');

async function analyzeAndRemoveFaces() {
    const image = sharp(inputPath);
    const { width, height } = await image.metadata();
    console.log(`Imagen: ${width}x${height}`);

    const rawBuffer = await image.ensureAlpha().raw().toBuffer();

    // ─────────────────────────────────────────────────────────────────────────
    // COORDENADAS DE LOS AVATARES en la pantalla del celular
    // (ajustar si es necesario - coordenadas en píxeles de la imagen 1376x752)
    //
    // Los círculos de avatares parecen estar en la sección "MI PERSONAL"
    // en el lado derecho de la pantalla del teléfono.
    // Basado en la posición visual aproximada:
    // ─────────────────────────────────────────────────────────────────────────

    // Color de reemplazo: blanco (fondo de la app)
    const replaceR = 255;
    const replaceG = 255;
    const replaceB = 255;
    const replaceA = 255;

    // Función para pintar un círculo relleno
    function fillCircle(cx, cy, radius) {
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const px = cx + dx;
                    const py = cy + dy;
                    if (px >= 0 && px < width && py >= 0 && py < height) {
                        const idx = (py * width + px) * 4;
                        rawBuffer[idx] = replaceR;
                        rawBuffer[idx + 1] = replaceG;
                        rawBuffer[idx + 2] = replaceB;
                        rawBuffer[idx + 3] = replaceA;
                    }
                }
            }
        }
    }

    // Función para pintar un rectángulo relleno
    function fillRect(x1, y1, x2, y2) {
        for (let py = y1; py <= y2; py++) {
            for (let px = x1; px <= x2; px++) {
                if (px >= 0 && px < width && py >= 0 && py < height) {
                    const idx = (py * width + px) * 4;
                    rawBuffer[idx] = replaceR;
                    rawBuffer[idx + 1] = replaceG;
                    rawBuffer[idx + 2] = replaceB;
                    rawBuffer[idx + 3] = replaceA;
                }
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // AVATARES EN "MI PERSONAL" (lado derecho del teléfono)
    // Imagen 1376x752 - teléfono ocupa aprox x:95–410, la pantalla x:110–395
    // Los avatares de "MI PERSONAL" están en el tercio derecho de la pantalla
    // aproximadamente x: 300-395, y: 95-380
    // ─────────────────────────────────────────────────────────────────────────

    // ─── AVATARES EN "MI PERSONAL" (posiciones verificadas con mapa de cuadrícula) ───
    // Cada celda de la cuadrícula = 50px. Imagen 1376x752.

    // Avatar 1: Mario - Riego  (centro aprox x=633, y=278)
    fillCircle(633, 278, 38);

    // Avatar 2: Juan - Cosecha  (centro aprox x=633, y=385)
    fillCircle(633, 385, 38);

    // Avatar 3: Luis - Cosecha  (centro aprox x=633, y=490)
    fillCircle(633, 490, 38);

    // Guardar resultado
    const outputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');
    const tmpPath = outputPath + '.tmp2.png';

    await sharp(rawBuffer, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(tmpPath);

    fs.copyFileSync(tmpPath, outputPath);
    fs.unlinkSync(tmpPath);

    console.log('✅ Avatares eliminados. Archivo guardado:', outputPath);
}

analyzeAndRemoveFaces().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
