import LinkBehavior, { ILinkBehaviorProps } from "../LinkBehavior";

import { MyTypography, IMyTypographyProps } from "../MyTypography";

type IMyLinkProps = Omit<IMyTypographyProps, "aria-label"> &
  Required<Pick<IMyTypographyProps, "title" | "children">> &
  ILinkBehaviorProps;

const MyLink = ({ title, ...rest }: IMyLinkProps) => {
  return (
    <MyTypography
      sx={{ textDecoration: "none" }}
      component={LinkBehavior}
      aria-label={title}
      title={title}
      {...rest}
    />
  );
};

export { MyLink };
