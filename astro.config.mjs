// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://wasilukfoto.pl',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
      
      include: {
        lucide: [
          "arrow-up-right",
          "chevron-right",
          "phone",
          "menu",
          "circle-check-big",
          "mail",
          "facebook",
          "instagram",
          "youtube",
          "hand-heart",
          "users",
          "handshake",
          "scale",
          "map-pin",
          "calendar-clock",
          "hand-coins",
          "calendar",
          "camera",
          "server",
          'fingerprint',
          "file-chart-column-increasing",
          "chart-no-axes-combined"
        ],
      },
    }), sitemap(), react()]
});
