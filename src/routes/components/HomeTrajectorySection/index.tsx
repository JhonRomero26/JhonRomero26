import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.scss?inline";
import { useTranslate } from "qwik-speak";
import { Trajectory } from "~/components/Trajectory";

type ProjectsSectionProps = {};

export const HomeTrajectorySection = component$<ProjectsSectionProps>(() => {
  useStyles$(styles);
  const t = useTranslate();

  return (
    <section class="HomeTrajectorySection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title HomeTrajectorySection-title text-right">
            {t("home.trajectory.title.value0")}
            <br />
            <span class="accent">{t("home.trajectory.title.value1")}</span>
          </h2>
          <p class="section-subtitle HomeTrajectorySection-subtitle">
            {t("home.trajectory.subtitle.value0")}
            <br />
            <span>{t("home.trajectory.subtitle.value1")}</span>
          </p>
        </div>
        <Trajectory />
      </div>
    </section>
  );
});
