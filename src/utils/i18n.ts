type LoadI18n = {
  lang?: string;
  asset: string;
};

const dataI18n = import.meta.glob<string>("../i18n/**/*.json", {
  import: "default",
  query: "?raw",
});

type TranslationFunction = (key: string) => string;

export async function loadI18n({
  lang = "en",
  asset,
}: LoadI18n): Promise<TranslationFunction> {
  const langAsset = `../i18n/${lang}/${asset}.json`;
  const existAsset = langAsset in dataI18n;

  if (!existAsset) {
    throw new Error(`Lang ${langAsset} not found`);
  }

  const raw = await dataI18n[langAsset]();
  const data = JSON.parse(raw);

  return (key: string): string => {
    const keys = key.split(".");
    const lastKey = keys.pop() || "";
    let obj: Record<string, any> = data;
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]];
    }
    return obj[lastKey];
  };
}
