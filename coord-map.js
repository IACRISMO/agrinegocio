const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');

async function generateCoordinateMap() {
    const image = sharp(inputPath);
    const { width, height } = await image.metadata();
    console.log(`Dimensiones: ${width}x${height}`);

    const rawBuffer = await image.ensureAlpha().raw().toBuffer();

    // Dibuja una cuadrícula de referencia cada 50px y marca el área del teléfono
    // Pinta líneas de cuadrícula en rojo
    function setPixel(x, y, r, g, b) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
            const idx = (y * width + x) * 4;
            rawBuffer[idx] = r;
            rawBuffer[idx + 1] = g;
            rawBuffer[idx + 2] = b;
            rawBuffer[idx + 3] = 255;
        }
    }

    // Líneas verticales cada 50px
    for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y++) {
            setPixel(x, y, 255, 0, 0);
        }
    }
    // Líneas horizontales cada 50px
    for (let y = 0; y < height; y += 50) {
        for (let x = 0; x < width; x++) {
            setPixel(x, y, 255, 0, 0);
        }
    }

    await sharp(rawBuffer, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(path.join(__dirname, 'public', 'images', 'coordinate-map.png'));

    console.log('✅ Mapa de coordenadas guardado en public/images/coordinate-map.png');
    console.log('La cuadrícula roja está cada 50 píxeles.');
    console.log('Úsala para identificar las coordenadas de los avatares.');
}

generateCoordinateMap().catch(console.error);
