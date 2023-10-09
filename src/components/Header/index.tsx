import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ThemeButton } from "~/components/ThemeButton";
import { LanguageButton } from "~/components/LanguageButton";
import { TbMenu2 } from "@qwikest/icons/tablericons";
import { useTranslate } from "qwik-speak";
import Logo from "~/media/logo.svg?jsx";

import styles from "./styles.scss?inline";
import { NAVIGATION_MENU } from "~/lib/constants";
import { Dropdown, DropdownItem } from "../Dropdown";

export const Header = component$(() => {
  useStyles$(styles);
  const t = useTranslate();
  const navigationRef = useSignal<HTMLElement>();

  return (
    <header class="Header">
      <div class="Header-contain">
        <nav class="container Header-navigator">
          <div class="Header-left">
            <Dropdown
              width="180px"
              direction="left"
              triggerClass="btn-icon Header-burger"
            >
              <TbMenu2 q:slot="trigger" />
              {NAVIGATION_MENU.map((nav) => (
                <DropdownItem key={nav.path}>
                  <Link href={nav.path}>{t(nav.title)}</Link>
                </DropdownItem>
              ))}
            </Dropdown>
            <ul class="Header-navigation" ref={navigationRef}>
              {NAVIGATION_MENU.map((nav) => (
                <Link key={nav.path} class="Header-link" href={nav.path}>
                  {t(nav.title)}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/" class="Header-logo">
            <Logo />
          </Link>
          <div class="Header-right">
            <ThemeButton />
            <LanguageButton />
          </div>
        </nav>
      </div>
    </header>
  );
});
