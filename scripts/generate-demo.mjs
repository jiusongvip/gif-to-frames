import fs from 'node:fs';
import path from 'node:path';
import GIFEncoder from 'gif-encoder-2';
import { PNG } from 'pngjs';

const width = 240;
const height = 160;
const frameCount = 8;
const publicDir = path.resolve('public');
const demoDir = path.join(publicDir, 'demo');

fs.mkdirSync(demoDir, { recursive: true });

const encoder = new GIFEncoder(width, height, 'neuquant', true);
encoder.setDelay(120);
encoder.setQuality(10);
encoder.setRepeat(0);
encoder.start();

function makeFrame(step) {
  const buffer = Buffer.alloc(width * height * 4);
  const cx = width / 2 + Math.cos(step * Math.PI / 4) * 56;
  const cy = height / 2 + Math.sin(step * Math.PI / 4) * 38;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const circle = Math.max(0, 1 - distance / 58);
      const stripe = Math.sin((x + y) * 0.035 + step * 0.7) * 0.16;
      const r = Math.round(20 + stripe * 30 + circle * 140);
      const g = Math.round(145 + stripe * 40 + circle * 80);
      const b = Math.round(110 + stripe * 22 + circle * 35);

      buffer[offset] = Math.max(0, Math.min(255, r));
      buffer[offset + 1] = Math.max(0, Math.min(255, g));
      buffer[offset + 2] = Math.max(0, Math.min(255, b));
      buffer[offset + 3] = 255;
    }
  }

  return buffer;
}

function writePng(fileName, data) {
  const png = new PNG({ width, height });
  data.copy(png.data);
  fs.writeFileSync(fileName, PNG.sync.write(png));
}

for (let i = 0; i < frameCount; i += 1) {
  const frame = makeFrame(i);
  encoder.addFrame(frame);
  writePng(path.join(demoDir, `frame-${String(i + 1).padStart(2, '0')}.png`), frame);
}

encoder.finish();
fs.writeFileSync(path.join(publicDir, 'demo.gif'), encoder.out.getData());

console.log(`Generated ${frameCount} demo frames and demo.gif in public/.`);
