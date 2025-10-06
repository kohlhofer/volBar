// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kohlhofer.com',
  base: import.meta.env.PROD ? '/midiVol/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});