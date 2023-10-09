import { Slot, component$ } from "@builder.io/qwik";
import { useFormatDate, useTranslate } from "qwik-speak";
import { TRANSLATIONS } from "./constants";

import "./styles.scss";

type TrajectoryCardProps = {
  title: string;
  description: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills?: string[];
};

export const TrajectoryCard = component$(
  ({ title, description, startDate, endDate, skills }: TrajectoryCardProps) => {
    const fd = useFormatDate();
    const t = useTranslate();
    const started = new Date(startDate);
    const ended = endDate ? new Date(endDate) : undefined;

    return (
      <article class="TrajectoryCard">
        <time class="TrajectoryCard-date">
          {fd(started, { month: "short", year: "numeric" })} -{" "}
          {ended
            ? fd(ended, { month: "short", year: "numeric" })
            : t(TRANSLATIONS.dateEvenToday)}
        </time>
        <header class="TrajectoryCard-header">
          <h3 class="TrajectoryCard-title">{title}</h3>
          <div class="TrajectoryCard-badges">
            <Slot name="badges" />
          </div>
        </header>
        <div class="TrajectoryCard-content">
          <p class="TrajectoryCard-description">{description}</p>
          <Slot />
          {skills && (
            <div class="TrajectoryCard-skills">
              <span class="TrajectoryCard-skills-title">
                {t(TRANSLATIONS.skillsTitle)}:{" "}
              </span>
              {skills.map((skill) => (
                <>
                  <span class="TrajectoryCard-skills-badge" key={skill}>
                    {skill}
                  </span>{" "}
                </>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  },
);
