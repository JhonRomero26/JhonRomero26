import { component$, useStyles$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { SKILLS, TRANSLATIONS } from "./constants";

import styles from "./styles.scss?inline";

export const SkillsCarousel = component$(() => {
  useStyles$(styles);
  const t = useTranslate();

  return (
    <section class="skills">
      <div class="container skills-wrapper">
        <h2>{t(TRANSLATIONS.title)}:</h2>
        <div class="skills-skills">
          {SKILLS.map(({ title, Icon }) => {
            return (
              <div key={title} class="skills-skill">
                <Icon />
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
