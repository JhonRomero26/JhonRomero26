import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "~/components/router-head/router-head";
import { QwikSpeakProvider } from "qwik-speak";
import { translationFn } from "~/lib/i18n";
import { i18nConfig } from "~/lib/constants";

import "~/styles/base.scss";

export default component$(() => {
  return (
    <QwikSpeakProvider config={i18nConfig} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
          <ServiceWorkerRegister />
        </head>
        <body lang="en">
          <RouterOutlet />
        </body>
      </QwikCityProvider>
    </QwikSpeakProvider>
  );
});
