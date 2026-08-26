// Post-build fix: remove the trailing slash from the homepage URL in sitemap files.
// The homepage canonical must be the root domain without a trailing slash
// (inner pages keep their trailing slashes).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const homeWithSlash = '<loc>https://www.gif-to-frames.com/</loc>';
const homeWithoutSlash = '<loc>https://www.gif-to-frames.com</loc>';

for (const file of readdirSync(dist)) {
  if (!/^sitemap-.*\.xml$/.test(file)) continue;
  const path = join(dist, file);
  const xml = readFileSync(path, 'utf8');
  const fixed = xml.split(homeWithSlash).join(homeWithoutSlash);
  if (fixed !== xml) {
    writeFileSync(path, fixed);
    console.log(`[fix-sitemap-home] ${file}: homepage URL slash removed`);
  }
}
