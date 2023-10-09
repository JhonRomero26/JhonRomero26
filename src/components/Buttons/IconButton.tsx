import { Slot, component$, type ClassList } from "@builder.io/qwik";
import { Button, type ButtonProps } from "./Button";

type IconButtonProps = ButtonProps;

export const IconButton = component$(
  ({ class: className, ...props }: IconButtonProps) => {
    return (
      <Button {...props} class={["btn-icon", className as ClassList]}>
        <span slot="icon">
          <Slot />
        </span>
      </Button>
    );
  },
);
