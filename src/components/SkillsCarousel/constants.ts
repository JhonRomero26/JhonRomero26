import {
  SiAstro,
  SiDocker,
  SiCss3,
  SiGithubactions,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "@qwikest/icons/simpleicons";

export const SKILLS = [
  { title: "ReactJS", Icon: SiReact },
  { title: "Docker", Icon: SiDocker },
  { title: "Kubernetes", Icon: SiKubernetes },
  { title: "NodeJS", Icon: SiNodedotjs },
  { title: "AstroJS", Icon: SiAstro },
  { title: "GHActions", Icon: SiGithubactions },
  { title: "CI/CD", Icon: SiGitlab },
  { title: "JavaScript", Icon: SiJavascript },
  { title: "TypeScript", Icon: SiTypescript },
  { title: "HTML5", Icon: SiHtml5 },
  { title: "CSS3", Icon: SiCss3 },
];

const TRANSLATION_BASE = "SkillsCarousel";
export const TRANSLATIONS = {
  title: `${TRANSLATION_BASE}.title`,
};
