import { component$, useStyles$ } from "@builder.io/qwik";
import Logo from "~/media/logo-frame.svg?jsx";
import {
  SiGithub,
  SiGitlab,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@qwikest/icons/simpleicons";
import { useTranslate } from "qwik-speak";
import { TRANSLATIONS } from "./constants";

import styles from "./styles.scss?inline";

export const Footer = component$(() => {
  useStyles$(styles);
  const t = useTranslate();

  return (
    <footer class="Footer">
      <div class="container Footer-content">
        <div>
          <div class="Footer-message-follow">{t(TRANSLATIONS.follow)}</div>
          <ul class="Footer-social">
            <a
              href=""
              rel="noreferrer"
              target="_blank"
              class="Footer-social-link"
            >
              <SiGithub />
            </a>
            <a
              href=""
              rel="noreferrer"
              target="_blank"
              class="Footer-social-link"
            >
              <SiGitlab />
            </a>
            <a
              href=""
              rel="noreferrer"
              target="_blank"
              class="Footer-social-link"
            >
              <SiInstagram />
            </a>
            <a
              href="https://wa.me/593958813841"
              rel="noreferrer"
              target="_blank"
              class="Footer-social-link"
            >
              <SiWhatsapp />
            </a>
            <a
              href="https://linkedin.com/in/romero-jhon/"
              rel="noreferrer"
              target="_blank"
              class="Footer-social-link"
            >
              <SiLinkedin />
            </a>
          </ul>
        </div>
      </div>
      <div class="Footer-bottom">
        <div class="container">
          <div class="Footer-message">
            {t("app.madeBy.value0@@Made with")} <Logo class="logo" />{" "}
            {t("app.madeBy.value1@@by Jhon Romero")}
          </div>
        </div>
      </div>
    </footer>
  );
});
