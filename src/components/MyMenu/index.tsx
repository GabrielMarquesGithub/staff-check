import { ReactNode } from "react";

import MenuList, { MenuListProps } from "@mui/material/MenuList";
import Popper, { PopperProps } from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener, {
  ClickAwayListenerProps,
} from "@mui/material/ClickAwayListener";

type IMyMenuProps = Required<Pick<PopperProps, "anchorEl" | "open">> &
  Pick<ClickAwayListenerProps, "onClickAway"> &
  Required<Pick<MenuListProps, "aria-labelledby" | "id">> & {
    children: ReactNode;
  };

const MyMenu = ({
  open,
  anchorEl,
  onClickAway,
  "aria-labelledby": ariaLabelledby,
  id,
  children,
}: IMyMenuProps) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="bottom"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "center top" : "center bottom",
          }}
        >
          <Paper sx={{ marginTop: 5 }}>
            <ClickAwayListener onClickAway={onClickAway}>
              <MenuList
                autoFocusItem={open}
                id={id}
                aria-labelledby={ariaLabelledby}
                onKeyDown={undefined}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export { MyMenu };
