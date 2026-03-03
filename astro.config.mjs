import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mwarren306.github.io',
  base: '/paradyne-site',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
