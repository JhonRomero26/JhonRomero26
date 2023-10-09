import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { ThemeProvider } from "~/context/ThemeContext";

// Styles for components
import "~/styles/components.scss";
import "~/styles/utilities.scss";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </ThemeProvider>
  );
});
