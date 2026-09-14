import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.gif-to-frames.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      lastmod: new Date('2026-09-14'),
      filter: (page) => !/\/(privacy|terms)\/$/.test(new URL(page).pathname),
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
