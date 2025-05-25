// @ts-check
import { defineConfig } from "astro/config";

import { transformerCopyButton } from "@rehype-pretty/transformers";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { rehypePrettyCode } from "rehype-pretty-code";

import vercel from "@astrojs/vercel";

/** @type {import("rehype-pretty-code").Options} */
const options = {
  theme: "one-dark-pro",
  transformers: [
    transformerCopyButton({
      visibility: "hover",
      feedbackDuration: 2_500,
    }),
  ],
};

// https://astro.build/config
export default defineConfig({
  compressHTML: true,

  markdown: {
    syntaxHighlight: false,
    smartypants: false,
    rehypePlugins: [[rehypePrettyCode, options]],
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    css: {
      transformer: "lightningcss",
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        "simple-icons": [
          "react",
          "typescript",
          "html5",
          "css3",
          "javascript",
          "astro",
          "tailwindcss",
          "git",
          "github",
          "figma",
          "githubactions",
          "docker",
          "nodedotjs",
          "arduino",
          "postgresql",
          "mongodb",
          "sass",
          "graphql",
          "instagram",
          "linkedin",
          "whatsapp",
        ],
        "tabler-icons": [
          "menu-2",
          "sun",
          "moon",
          "paperclip",
          "link",
          "arrow-right",
          "user",
          "clock",
          "brand-github",
          "brand-linkedin",
          "brand-instagram",
        ],
      },
    }),
  ],

  adapter: vercel(),
});