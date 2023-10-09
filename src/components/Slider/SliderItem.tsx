import {
  Slot,
  component$,
  type HTMLAttributes,
  type ClassList,
} from "@builder.io/qwik";

type SliderItemProps = HTMLAttributes<HTMLDivElement>;

export const SliderItem = component$(
  ({ class: className }: SliderItemProps) => {
    return (
      <div class={["Slider-item", className as ClassList]}>
        <Slot />
      </div>
    );
  },
);
