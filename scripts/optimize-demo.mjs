import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const dir = new URL('../public/demo', import.meta.url).pathname.replace(/^\//, '');

for (const file of readdirSync(dir)) {
  if (!file.endsWith('.png')) continue;
  const src = join(dir, file);
  const webp = join(dir, file.replace(/\.png$/, '.webp'));
  const info = readFileSync(src);
  const meta = await sharp(info).metadata();
  const buf = await sharp(info).webp({ quality: 80 }).toBuffer();
  writeFileSync(webp, buf);
  console.log(
    `${file} ${meta.width}x${meta.height} png=${(info.length / 1024).toFixed(1)}KB -> webp=${(buf.length / 1024).toFixed(1)}KB`,
  );
}
