import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { FantasticHero } from "~/components/FantasticHero";
import { HeroLinks } from "./HeroLinks";

import "./styles.scss";

export const HomeFantasticHero = component$(() => {
  const t = useTranslate();

  return (
    <>
      <FantasticHero
        title="Jhon Alexander Romero Gonzaga"
        subtitle={t("home.hero.subtitle")}
        description={t("home.hero.description")}
      >
        <HeroLinks q:slot="footer" />
      </FantasticHero>
    </>
  );
});
