import { forwardRef } from "react";

import Button, { ButtonProps } from "@mui/material/Button";

import LinkBehavior from "../LinkBehavior";

export type IMyButtonProps = Omit<ButtonProps, "component" | "LinkComponent"> &
  Required<Pick<ButtonProps, "children" | "aria-label">>;

const MyButton = forwardRef<HTMLButtonElement, IMyButtonProps>(
  ({ disabled, ...rest }, ref) => {
    return (
      <Button
        LinkComponent={LinkBehavior}
        ref={ref}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

export { MyButton };
