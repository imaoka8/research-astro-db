// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import node from '@astrojs/node';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: 'server',
  adapter: cloudflare({
    platformProxy: {           // devで bindings をエミュレート
      enabled: true,
      persist: true,           // .wrangler/state/v3 にローカル保存
    },
  }),
});