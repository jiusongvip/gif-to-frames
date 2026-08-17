import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://gif-to-frames.com',
  trailingSlash: 'never',
  integrations: [sitemap({ lastmod: new Date('2026-08-17') }), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
