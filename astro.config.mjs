import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // https://docs.astro.build/en/guides/deploy/github/
  site: 'https://www.betmates.app'
});