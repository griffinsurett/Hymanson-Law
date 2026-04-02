// src/components/Button/variants/PhoneNumberButton.tsx
import { ButtonBase, type ButtonProps } from "../Button";
import { renderButtonIcon } from "../utils";

export default function PhoneNumberButton({
  leftIcon,
  rightIcon,
  className = "",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const variantClasses =
    "phone-number-button inline-flex items-center gap-3 rounded-full px-0 py-0 text-heading transition-colors duration-200 hover:text-primary";

  return (
    <ButtonBase
      {...props}
      className={`${variantClasses} ${className}`}
      leftIcon={renderButtonIcon(leftIcon, size)}
      rightIcon={renderButtonIcon(rightIcon, size)}
      size={size}
    >
      {children}
    </ButtonBase>
  );
}
