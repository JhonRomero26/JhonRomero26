import { server$ } from '@builder.io/qwik-city'
import { isDev } from '@builder.io/qwik/build'
import type {
    LoadTranslationFn,
    Translation,
    TranslationFn
} from 'qwik-speak'

const translationData = import.meta.glob<Translation>('/i18n/**/*.json')

export const loadTranslation$: LoadTranslationFn = server$(async (
    lang: string,
    asset: string,
) => {
  const langAsset = `/i18n/${lang}/${asset}.json`
  if (langAsset in translationData) return translationData[langAsset]()
  if (isDev) console.warn(`loadTranslation: ${langAsset} not found`)
})

export const translationFn: TranslationFn = {
    loadTranslation$
}
