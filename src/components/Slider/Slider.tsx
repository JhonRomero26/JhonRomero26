import {
  $,
  Slot,
  component$,
  useOn,
  useSignal,
  useStore,
  type ClassList,
  type Signal,
} from "@builder.io/qwik";

export type SliderProps = {
  class?: ClassList | Signal<ClassList>;
};

export const Slider = component$(({ class: className }: SliderProps) => {
  const dragging = useSignal<boolean>(false);
  const wrapperRef = useSignal<HTMLDivElement>();
  const prevValues = useStore({
    prevPageX: 0,
    prevScrollLeft: 0,
  });

  useOn(
    "mousedown",
    $((e) => {
      const el = wrapperRef.value!;
      const { pageX } = e as MouseEvent;
      dragging.value = true;
      prevValues.prevPageX = pageX;
      prevValues.prevScrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    }),
  );

  useOn(
    "mouseup",
    $(() => {
      dragging.value = false;
      const el = wrapperRef.value!;
      //normal pointer
      el.style.cursor = "initial";
    }),
  );

  useOn(
    "mousemove",
    $((e) => {
      if (!dragging.value) return;
      e.preventDefault();
      const el = wrapperRef.value!;
      const { pageX } = e as MouseEvent;

      const positionDiff = pageX - prevValues.prevPageX;
      const newPosition = prevValues.prevScrollLeft - positionDiff;
      el.scrollLeft = newPosition;
      console.log(el.scrollLeft);
    }),
  );

  return (
    <div
      preventdefault:dragstart
      ref={wrapperRef}
      class={["Slider", className as ClassList]}
    >
      <div class="Slider-wrapper">
        <Slot />
      </div>
    </div>
  );
});
