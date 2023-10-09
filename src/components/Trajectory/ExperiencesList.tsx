import { component$ } from "@builder.io/qwik";
import { EXPERIENCES } from "~/data/trajectory";
import { TrajectoryCard } from "~/components/TrajectoryCard";
import { useTranslate } from "qwik-speak";

export const ExperiencesList = component$(() => {
  const t = useTranslate();

  return (
    <ul>
      {EXPERIENCES.map(
        ({ title, description, start_date, end_date, company, skills }) => {
          return (
            <TrajectoryCard
              key={title}
              title={t(title)}
              description={t(description)}
              startDate={start_date}
              endDate={end_date}
              skills={skills}
            >
              <span q:slot="badges">{company}</span>
            </TrajectoryCard>
          );
        },
      )}
    </ul>
  );
});
