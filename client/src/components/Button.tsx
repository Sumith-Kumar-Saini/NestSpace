import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface CustomProps {
  lightMode?: unknown;
}

interface ButtonProps extends ComponentProps<"button">, CustomProps {}

const Button: FC<ButtonProps> = ({
  children,
  lightMode,
  className,
  ...rest
}) => {
  const mode = Boolean(lightMode);
  return (
    <button
      {...rest}
      className={twMerge(
        "h-14 md:h-16 p-4 outline-none w-fit rounded-md border border-charcoal cursor-pointer flex justify-center items-center",
        mode && "border-eggshell",
        className
      )}
    >
      <span
        className={twMerge(
          "font-satoshi text-md font-medium text-charcoal",
          mode && "text-eggshell"
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
