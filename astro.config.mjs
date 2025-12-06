// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  vite: {
    plugins: [
      // @ts-ignore - Tailwind Vite plugin types conflict with Astro's internal Vite types
      tailwindcss(),
    ],
  },
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  build: {
    assets: '_astro' 
  }
});