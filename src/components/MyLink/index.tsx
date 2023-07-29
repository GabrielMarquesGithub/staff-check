import { Link as RouterLink } from "react-router-dom";

import Link, { LinkProps } from "@mui/material/Link";

type IMyLinkProps = LinkProps &
  Required<Pick<LinkProps, "aria-label" | "href" | "children">>;

function MyLink({ href, underline = "none", ...rest }: IMyLinkProps) {
  return (
    <Link component={RouterLink} underline={underline} to={href} {...rest} />
  );
}

export { MyLink };
