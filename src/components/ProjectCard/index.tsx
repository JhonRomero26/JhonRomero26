import { component$, useStyles$ } from "@builder.io/qwik";
import { parseImageSources } from "~/lib/parsers";
import { SiGithub, SiGitlab } from "@qwikest/icons/simpleicons";
import { TbWorld } from "@qwikest/icons/tablericons";
import { type Project } from "~/schemas/Project";

import styles from "./styles.scss?inline";
import { Tooltip } from "../Tooltip";

type ProjectCardProps = {
  title: string;
  image: string;
  imagesSet?: { [index: string]: string };
  links?: Project["links"];
  devtools?: Project["devtools"];
};

const ICON_LINKS = {
  github: SiGithub,
  gitlab: SiGitlab,
  website: TbWorld,
};

export const ProjectCard = component$<ProjectCardProps>(
  ({ title, image, imagesSet, links, devtools }) => {
    useStyles$(styles);

    return (
      <article class="ProjectCard">
        <picture class="ProjectCard-image">
          <div class="ProjectCard-overlay">
            <div class="ProjectCard-anchors">
              {links &&
                links.map(({ name, url }) => {
                  const iconName = name.toLowerCase();
                  const IconComponent =
                    iconName in ICON_LINKS
                      ? ICON_LINKS[iconName as keyof typeof ICON_LINKS]
                      : ICON_LINKS["website"];
                  return (
                    <Tooltip key={name}>
                      <span q:slot="message">{name}</span>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={url}
                        class="ProjectCard-link"
                      >
                        <IconComponent
                          title={name}
                          class="ProjectCard-link-icon"
                        />
                      </a>
                    </Tooltip>
                  );
                })}
            </div>
          </div>
          <img
            width="1920"
            height="1080"
            loading="lazy"
            src={image}
            srcSet={parseImageSources(imagesSet)}
            alt={title}
          />
        </picture>
        <div class="ProjectCard-content">
          <h3 class="ProjectCard-title">{title}</h3>
          {devtools && (
            <div class="ProjectCard-devtools">
              {devtools.map((tool) => {
                return (
                  <span class="ProjectCard-tool" key={tool}>
                    {tool}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </article>
    );
  },
);
