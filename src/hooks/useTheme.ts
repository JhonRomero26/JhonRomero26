import { $, useContext, type Signal, type QRL } from "@builder.io/qwik";
import { type Theme, ThemeContext } from "~/context/ThemeContext";

type useThemeReturns = {
  theme: Signal<Theme>;
  toggleTheme$: QRL<() => void>;
};

const THEMES_INVERSE = {
  light: "dark",
  dark: "light",
};

export const useTheme = (): useThemeReturns => {
  const theme = useContext(ThemeContext);

  const toggleTheme$ = $(() => {
    const newTheme = THEMES_INVERSE[theme.value] as Theme;
    localStorage.setItem("theme", newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    theme.value = newTheme;
  });

  return { theme, toggleTheme$ };
};
