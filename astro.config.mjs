import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: "https://ai.triasiaglobal.com",
  base: "",
  integrations: [tailwind()],
  output: 'static',
});