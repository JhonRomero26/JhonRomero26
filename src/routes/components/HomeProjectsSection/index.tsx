import {
  Resource,
  component$,
  useResource$,
  useStyles$,
} from "@builder.io/qwik";
import { ProjectCard } from "~/components/ProjectCard";
import { useTranslate } from "qwik-speak";
import { getProjects } from "~/services/projects";

import styles from "./styles.scss?inline";

export const HomeProjectsSection = component$(() => {
  useStyles$(styles);
  const t = useTranslate();
  const projectsResource = useResource$(() => {
    return getProjects();
  });

  return (
    <section class="HomeProjectsSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {t("home.projects.title.value0")}
            <br />
            <span class="accent">{t("home.projects.title.value1")}</span>
          </h2>
          <p class="section-subtitle">
            {t("home.projects.subtitle.value0")}
            <br />
            {t("home.projects.subtitle.value1")}
          </p>
        </div>
        <div class="HomeProjectsSection-container">
          <Resource
            value={projectsResource}
            onResolved={(projects) => (
              <>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    devtools={project.devtools}
                    image={project.images.thumbnail}
                    links={project.links}
                    imagesSet={{
                      "1x": project.images.small,
                      "2x": project.images.medium,
                      "4x": project.images.large,
                    }}
                  />
                ))}
              </>
            )}
            onPending={() => <div>Loading...</div>}
            onRejected={(error) => <div>{error.message}</div>}
          />
        </div>
      </div>
    </section>
  );
});
