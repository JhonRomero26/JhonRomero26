import { $, Slot, component$, useSignal } from "@builder.io/qwik";
import { Button } from "../Buttons";

type DropdownProps = {
  width?: string;
  triggerClass?: string;
  direction?: "left" | "right" | "center";
};

export const Dropdown = component$(
  ({ width = "250px", triggerClass, direction = "left" }: DropdownProps) => {
    const contentRef = useSignal<HTMLElement>();

    const handleToggle$ = $(() => {
      const isShow = contentRef.value!.classList.contains("show");
      if (isShow) contentRef.value!.classList.remove("show");
      else contentRef.value!.classList.add("show");
    });

    return (
      <div class="Dropdown">
        <Button onClick$={handleToggle$} class={triggerClass}>
          <Slot name="trigger" />
        </Button>
        <div
          onClick$={handleToggle$}
          ref={contentRef}
          style={{ width }}
          class={["Dropdown-content", `Dropdown-${direction}`]}
        >
          <Slot />
        </div>
      </div>
    );
  },
);
