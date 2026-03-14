import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://levchenko.cc',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
