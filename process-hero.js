const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Nueva imagen fuente (JPG con fondo blanco)
const inputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.jpg');
const outputPath = path.join(__dirname, 'public', 'images', 'hero-farmer-nobg.png');

async function process() {
    const image = sharp(inputPath);
    const { width, height } = await image.metadata();
    console.log(`Imagen nueva: ${width}x${height}`);

    let rawBuffer = await image.ensureAlpha().raw().toBuffer();

    // ── Flood-fill desde bordes (eliminar fondo blanco/claro) ──
    const bgThreshold = 240;
    const tolerance = 20;

    function isBackground(idx) {
        const r = rawBuffer[idx], g = rawBuffer[idx + 1], b = rawBuffer[idx + 2];
        return r > bgThreshold && g > bgThreshold && b > bgThreshold;
    }
    function isSimilar(idx, sr, sg, sb) {
        const r = rawBuffer[idx], g = rawBuffer[idx + 1], b = rawBuffer[idx + 2];
        return Math.abs(r - sr) <= tolerance && Math.abs(g - sg) <= tolerance && Math.abs(b - sb) <= tolerance
            && r > (bgThreshold - 30) && g > (bgThreshold - 30) && b > (bgThreshold - 30);
    }

    const visited = new Uint8Array(width * height);
    const toMakeTransparent = new Uint8Array(width * height);
    const queue = [];

    // Sembrar desde los 4 bordes
    for (let x = 0; x < width; x++) {
        const ti = 0 * width + x, bi = (height - 1) * width + x;
        if (!visited[ti] && isBackground(ti * 4)) { queue.push(ti); visited[ti] = 1; }
        if (!visited[bi] && isBackground(bi * 4)) { queue.push(bi); visited[bi] = 1; }
    }
    for (let y = 0; y < height; y++) {
        const li = y * width + 0, ri = y * width + (width - 1);
        if (!visited[li] && isBackground(li * 4)) { queue.push(li); visited[li] = 1; }
        if (!visited[ri] && isBackground(ri * 4)) { queue.push(ri); visited[ri] = 1; }
    }

    // BFS
    let head = 0;
    while (head < queue.length) {
        const pixel = queue[head++];
        toMakeTransparent[pixel] = 1;
        const px = pixel % width, py = Math.floor(pixel / width);
        const sr = rawBuffer[pixel * 4], sg = rawBuffer[pixel * 4 + 1], sb = rawBuffer[pixel * 4 + 2];
        const neighbors = [
            py > 0 ? (py - 1) * width + px : -1,
            py < height - 1 ? (py + 1) * width + px : -1,
            px > 0 ? py * width + (px - 1) : -1,
            px < width - 1 ? py * width + (px + 1) : -1,
        ];
        for (const n of neighbors) {
            if (n < 0 || visited[n]) continue;
            if (isSimilar(n * 4, sr, sg, sb)) { visited[n] = 1; queue.push(n); }
        }
    }

    // Aplicar transparencia
    for (let i = 0; i < width * height; i++) {
        if (toMakeTransparent[i]) rawBuffer[i * 4 + 3] = 0;
    }
    console.log(`Flood-fill OK – ${queue.length} píxeles de fondo eliminados`);

    // Guardar PNG con transparencia
    const tmpPath = path.join(__dirname, 'public', 'images', '_hero_tmp.png');
    await sharp(rawBuffer, { raw: { width, height, channels: 4 } }).png().toFile(tmpPath);

    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    fs.renameSync(tmpPath, outputPath);

    console.log('✅ PNG guardado en:', outputPath);
}

process().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
