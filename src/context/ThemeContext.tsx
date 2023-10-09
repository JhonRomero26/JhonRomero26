import {
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  Slot,
  type Signal,
  useVisibleTask$,
} from "@builder.io/qwik";

export type Theme = "light" | "dark";
export const ThemeContext = createContextId<Signal<Theme>>("theme-context");

export const ThemeProvider = component$(() => {
  const signalTheme = useSignal<Theme>("light");
  useContextProvider(ThemeContext, signalTheme);

  useVisibleTask$(
    () => {
      const theme = localStorage.getItem("theme") ?? "light";
      document.querySelector("html")?.setAttribute("data-theme", theme);
      signalTheme.value = theme as Theme;
    },
    { strategy: "document-idle" },
  );

  return <Slot />;
});
