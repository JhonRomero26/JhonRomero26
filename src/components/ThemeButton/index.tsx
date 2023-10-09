import { component$ } from "@builder.io/qwik";
import { TbSun } from "@qwikest/icons/tablericons";
import { IconButton } from "~/components/Buttons";
import { useTheme } from "~/hooks";

export const ThemeButton = component$(() => {
  const { toggleTheme$ } = useTheme();

  return (
    <IconButton onClick$={toggleTheme$}>
      <TbSun />
    </IconButton>
  );
});
