import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://levchenko.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
