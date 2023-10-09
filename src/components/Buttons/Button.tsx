import {
  type ButtonHTMLAttributes,
  Slot,
  component$,
  type ClassList,
} from "@builder.io/qwik";

export type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = component$(
  ({ class: className, ...props }: ButtonProps) => {
    return (
      <button {...props} class={["btn", className as ClassList]}>
        <Slot name="icon" />
        <Slot />
      </button>
    );
  },
);
