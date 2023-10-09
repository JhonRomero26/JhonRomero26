import { component$ } from "@builder.io/qwik";
import { SiGithub, SiLinkedin } from "@qwikest/icons/simpleicons";
import { TbPaperclip } from "@qwikest/icons/tablericons";
import { useTranslate } from "qwik-speak";
import { Tooltip } from "~/components/Tooltip";
import { SOCIAL_NETWORKS_URLS } from "~/lib/constants";

const LINKS = [
  {
    title: "home.hero.githubLabel",
    url: SOCIAL_NETWORKS_URLS.github,
    Icon: SiGithub,
  },
  {
    title: "home.hero.linkedinLabel",
    url: SOCIAL_NETWORKS_URLS.linkedin,
    Icon: SiLinkedin,
  },
  {
    title: "home.hero.profileLabel",
    url: "https://drive.google.com/file/d/1vkDTCwCPYvNfFX9UtRVQonvAbEHZLyWe/view?usp=drive_link",
    Icon: TbPaperclip,
  },
];

export const HeroLinks = component$(() => {
  const t = useTranslate();
  return (
    <div q:slot="footer" class="home-hero-icons">
      {LINKS.map(({ title, url, Icon }) => {
        return (
          <Tooltip key={title} direction="bottom">
            <a
              rel="noreferrer"
              target="_blank"
              href={url}
              class="home-hero-icons-link"
            >
              <Icon />
            </a>
            <span q:slot="message">{t(title)}</span>
          </Tooltip>
        );
      })}
    </div>
  );
});
