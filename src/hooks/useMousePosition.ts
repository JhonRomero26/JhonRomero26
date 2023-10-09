import { $, useOnWindow, useStore } from "@builder.io/qwik";

export const useMousePosition = () => {
  const position = useStore({
    x: 0,
    y: 0,
  });

  useOnWindow(
    "mousemove",
    $((e) => {
      const { x, y } = e as MouseEvent;
      position.x = x;
      position.y = y;
    }),
  );

  return position;
};
