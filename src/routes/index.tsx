import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";
import { HomeProjectsSection } from "~/routes/components/HomeProjectsSection";
import { SkillsCarousel } from "~/components/SkillsCarousel";
import { HomeFantasticHero } from "./components/HomeFantasticHero";
import { HomeTrajectorySection } from "~/routes/components/HomeTrajectorySection";
import { type DocumentHead } from "@builder.io/qwik-city";

export const Home = component$(() => {
  return (
    <>
      <HomeFantasticHero />
      <SkillsCarousel />
      <HomeProjectsSection />
      <HomeTrajectorySection />
    </>
  );
});

export default component$(() => {
  return (
    <Speak assets={["home.asset"]}>
      <Home />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "documentsApp.home.title",
  meta: [
    {
      name: "description",
      content: "documentsApp.home.description",
    },
  ],
};
