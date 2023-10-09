import { component$, useStyles$ } from "@builder.io/qwik";
import { ExperiencesList } from "./ExperiencesList";
import { EducationList } from "./EducationList";
import { useTranslate } from "qwik-speak";
import { TRANSLATIONS } from "./constants";

import styles from "./styles.scss?inline";

export const Trajectory = component$(() => {
  useStyles$(styles);
  const t = useTranslate();

  return (
    <div class="Trajectory">
      <div class="Trajectory-content">
        <div class="Trajectory-title">{t(TRANSLATIONS.experienceTitle)}</div>
        <ExperiencesList />
      </div>
      <div>
        <div class="Trajectory-title">{t(TRANSLATIONS.educationTitle)}</div>
        <EducationList />
      </div>
    </div>
  );
});
