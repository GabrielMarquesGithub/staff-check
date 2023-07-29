import Button, { ButtonProps } from "@mui/material/Button";

type IMyButtonProps = Omit<ButtonProps, "component" | "LinkComponent"> &
  Required<Pick<ButtonProps, "children" | "title">>;

function MyButton({ title, disabled, ...rest }: IMyButtonProps) {
  return (
    <Button
      title={title}
      aria-label={title}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    />
  );
}

export { MyButton };
