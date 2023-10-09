import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikSpeakInline } from 'qwik-speak/inline'
import { i18nConfig } from './src/lib/constants'

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikSpeakInline({
        basePath: '.',
        assetsPath: 'i18n',
        supportedLangs: i18nConfig.supportedLocales.map((item) => item.lang),
        defaultLang: i18nConfig.defaultLocale.lang,
      })
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
