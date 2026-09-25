// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://weiyz23.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  // Disable the Astro dev toolbar
  devToolbar: {
    enabled: false
  }
});
