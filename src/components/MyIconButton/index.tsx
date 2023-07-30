import { forwardRef } from "react";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import LinkBehavior from "../LinkBehavior";

type IMyIconButtonProps = Omit<IconButtonProps, "component" | "LinkComponent"> &
  Required<Pick<IconButtonProps, "children" | "aria-label">>;

const MyIconButton = forwardRef<HTMLButtonElement, IMyIconButtonProps>(
  ({ disabled, ...rest }, ref) => {
    return (
      <IconButton
        LinkComponent={LinkBehavior}
        ref={ref}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

export { MyIconButton };
