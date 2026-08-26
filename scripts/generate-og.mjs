import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-1200x630.png');

const width = 1200;
const height = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1c1e22"/>
      <stop offset="0.55" stop-color="#241b3d"/>
      <stop offset="1" stop-color="#4a2fd6"/>
    </linearGradient>
    <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9a83ff"/>
      <stop offset="1" stop-color="#6d4bf2"/>
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- filmstrip grid motif -->
  <g opacity="0.96">
    <rect x="96" y="118" width="132" height="132" rx="18" fill="url(#frame)"/>
    <rect x="252" y="118" width="132" height="132" rx="18" fill="#8a6cf5"/>
    <rect x="96" y="274" width="132" height="132" rx="18" fill="#8a6cf5"/>
    <rect x="252" y="274" width="132" height="132" rx="18" fill="url(#frame)"/>
    <polygon points="168,170 168,224 212,197" fill="#1c1e22"/>
  </g>

  <!-- faint grid -->
  <g stroke="rgba(154,131,255,0.16)" stroke-width="1">
    <line x1="0" y1="180" x2="1200" y2="180"/>
    <line x1="0" y1="330" x2="1200" y2="330"/>
    <line x1="480" y1="0" x2="480" y2="630"/>
    <line x1="840" y1="0" x2="840" y2="630"/>
  </g>

  <!-- text -->
  <text x="560" y="240" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#f7f5ff" letter-spacing="-1">GIF to Frames</text>
  <text x="562" y="330" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#c9bcff">Split an animated GIF into PNG, JPG, or WebP</text>
  <text x="562" y="386" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#c9bcff">frames — free, locally in your browser.</text>

  <g>
    <rect x="560" y="430" width="236" height="64" rx="14" fill="#9a83ff"/>
    <text x="678" y="472" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#1c1e22" text-anchor="middle">Extract frames</text>
  </g>
  <g>
    <rect x="820" y="430" width="236" height="64" rx="14" fill="none" stroke="#9a83ff" stroke-width="2"/>
    <text x="938" y="472" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#e3dcff" text-anchor="middle">No upload</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
const meta = await sharp(out).metadata();
console.log(`OG image written: ${out}`);
console.log(`  dimensions: ${meta.width}x${meta.height}, format: ${meta.format}, bytes: ${(await sharp(out).toBuffer()).length}`);
