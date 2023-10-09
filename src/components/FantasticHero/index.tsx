import Logo from "~/media/logo.svg?jsx";
import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./style.scss?inline";

type FantasticHeroProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const FantasticHero = component$<FantasticHeroProps>(
  ({ title, subtitle, description }) => {
    useStyles$(styles);

    return (
      <section class="hero-fantastic">
        <div class="hero-fantastic-content">
          <picture class="hero-fantastic-logo">
            <Logo loading="lazy" alt="" />
          </picture>
          <div class="hero-fantastic-body">
            <div class="hero-fantastic-header">
              <h1 class="hero-fantastic-title">{title}</h1>
              <div class="hero-fantastic-subtitle">{subtitle}</div>
            </div>
            <p class="hero-fantastic-description">{description}</p>
          </div>
          <div class="hero-fantastic-footer">
            <Slot name="footer" />
          </div>
        </div>
        <div class="hero-fantastic-gradient" />
      </section>
    );
  },
);
