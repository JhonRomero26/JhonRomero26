import { Slot, component$ } from "@builder.io/qwik";

import "./styles.scss";

type TooltipProps = {
  direction?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
};

export const Tooltip = component$(({ direction = "top" }: TooltipProps) => {
  return (
    <div class="Tooltip">
      <div class={["Tooltip-message", direction]}>
        <Slot name="message" />
      </div>
      <Slot />
    </div>
  );
});
