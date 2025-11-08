import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://johnhenry.github.io',
  base: '/awesome-ai-tools',
  vite: {
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, '../data')
      }
    }
  }
});
