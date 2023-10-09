import { $, component$ } from "@builder.io/qwik";
import { TbLanguage } from "@qwikest/icons/tablericons";
import { type SpeakLocale, useSpeakConfig } from "qwik-speak";
import { Dropdown, DropdownItem } from "~/components/Dropdown";
import { LANGUAGE_NAMES } from "~/lib/constants";

export const LanguageButton = component$(() => {
  const config = useSpeakConfig();
  const handleChangeLocale$ = $((newLocale: SpeakLocale) => {
    document.cookie = `locale=${JSON.stringify(
      newLocale,
    )};max-age=86400;path=/`;
    location.reload();
  });

  return (
    <Dropdown width="160px" direction="right" triggerClass="btn-icon">
      <TbLanguage q:slot="trigger" />
      <ul>
        {config.supportedLocales.map((value) => {
          const langValues = value.lang.split("_");
          const lang =
            LANGUAGE_NAMES[langValues[0] as keyof typeof LANGUAGE_NAMES];
          const country = langValues.length > 1 ? langValues[1] : null;

          return (
            <DropdownItem
              onClick$={async () => handleChangeLocale$(value)}
              key={lang}
            >
              <span class="text-capitalize">
                {lang}
                <span class="text-uppercase">{country && `(${country})`}</span>
              </span>
            </DropdownItem>
          );
        })}
      </ul>
    </Dropdown>
  );
});
