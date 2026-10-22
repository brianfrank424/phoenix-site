// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://phxpropertypartners.com',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: {
    resolve: {
      tsconfigPaths: false,
    },
  },
});
