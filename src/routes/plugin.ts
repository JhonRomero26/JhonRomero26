import { type RequestHandler } from "@builder.io/qwik-city";
import { i18nConfig } from "~/lib/constants";

export const onRequest: RequestHandler = ({ request, locale }) => {
  const cookie = request.headers.get("cookie");
  const acceptLanguage = request.headers.get("accept-language");
  let lang: string | null = null;

  if (cookie) {
    const result = new RegExp(
      "(?:^|; )" + encodeURIComponent("locale") + "=([^;]*)",
    ).exec(cookie);
    if (result) lang = JSON.parse(result[1])["lang"];
  }

  if (!lang && acceptLanguage) {
    lang = acceptLanguage.split(";")[0]?.split(",")[0];
  }

  lang =
    i18nConfig.supportedLocales.find((value) => value.lang === lang)?.lang ||
    i18nConfig.defaultLocale.lang;

  locale(lang);
};
