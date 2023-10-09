import { component$ } from "@builder.io/qwik";
import { EDUCATION } from "~/data/trajectory";
import { TrajectoryCard } from "~/components/TrajectoryCard";
import { useTranslate } from "qwik-speak";

export const EducationList = component$(() => {
  const t = useTranslate();

  return (
    <ul>
      {EDUCATION.map(
        ({ institution, titleDegree, description, start_date, end_date }) => {
          return (
            <TrajectoryCard
              key={description}
              startDate={start_date}
              endDate={end_date}
              title={institution}
              description={t(description)}
            >
              <span q:slot="badges">{t(titleDegree)}</span>
            </TrajectoryCard>
          );
        },
      )}
    </ul>
  );
});
