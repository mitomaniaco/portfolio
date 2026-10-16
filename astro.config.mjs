import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://caioaugusto.vercel.app',
  build: { inlineStylesheets: 'auto', assets: 'assets' },
});
