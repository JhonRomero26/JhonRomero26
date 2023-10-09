import {
  Slot,
  component$,
  useStyles$,
  type HTMLAttributes,
  type ClassList,
} from "@builder.io/qwik";
import styles from "./styles.scss?inline";

type DropdownItemProps = {} & HTMLAttributes<HTMLDivElement>;

export const DropdownItem = component$(
  ({ class: className, ...props }: DropdownItemProps) => {
    useStyles$(styles);

    return (
      <div {...props} class={["Dropdown-item", className as ClassList]}>
        <Slot />
      </div>
    );
  },
);
