import { type SpeakConfig } from "qwik-speak";

export const i18nConfig: SpeakConfig = {
    defaultLocale: { lang: 'en', currency: 'USD', timeZone: 'America/Los_Angeles' },
    supportedLocales: [
        { lang: 'en', currency: 'USD', timeZone: 'America/Los_Angeles' },
        { lang: 'es', currency: 'USD', timeZone: 'America/Guayaquil' },
    ],
    assets: [
      // General
      'general.app',
      'trajectory.app',
      'documents.app',
      'components.app',
      // components
    ],

}

export const LANGUAGE_NAMES = {
    en: 'English',
    es: 'Español',
}