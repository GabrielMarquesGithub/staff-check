import Link, { LinkProps } from "@mui/material/Link";
import LinkBehavior from "../LinkBehavior";

type IMyLinkProps = Omit<LinkProps, "aria-label"> &
  Required<Pick<LinkProps, "title" | "href" | "children">>;

function MyLink({ title, underline = "none", ...rest }: IMyLinkProps) {
  return (
    <Link
      component={LinkBehavior}
      aria-label={title}
      title={title}
      underline={underline}
      {...rest}
    />
  );
}

export { MyLink };
