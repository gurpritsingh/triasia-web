import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "http://ai.triasiaglobal.com",
  base: "/",
  integrations: [tailwind()],
  output: 'static',
});