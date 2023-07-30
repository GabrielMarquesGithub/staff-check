import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

// Esse componente funciona como uma transição entre o router e o MUI
export type ILinkBehaviorProps = Omit<RouterLinkProps, "to"> & {
  href: RouterLinkProps["to"];
};

const LinkBehavior = forwardRef<HTMLAnchorElement, ILinkBehaviorProps>(
  (props, ref) => {
    const { href, ...rest } = props;
    return <RouterLink ref={ref} to={href} {...rest} />;
  }
);

export default LinkBehavior;
