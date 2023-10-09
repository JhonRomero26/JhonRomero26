import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";
import { isDev } from "@builder.io/qwik/build";
import { i18nConfig } from "~/lib/constants";

import type { RenderOptions } from "@builder.io/qwik";

export function extractBase({ serverData }: RenderOptions): string {
  const defaultPath = "/build";
  return !isDev && serverData?.locale.locale
    ? `${defaultPath}/${serverData.locale}`
    : defaultPath;
}

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: opts.serverData?.locale || i18nConfig.defaultLocale.lang,
      ...opts.containerAttributes,
    },
    base: extractBase,
  });
}
