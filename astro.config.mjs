// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [
      // @ts-ignore - Tailwind Vite plugin types conflict with Astro's internal Vite types
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  build: {
    assets: "_astro",
    inlineStylesheets: "always",
  },
});
