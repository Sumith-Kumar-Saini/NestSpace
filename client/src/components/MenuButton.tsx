import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface CustomProps {
  lightMode?: unknown;
}

interface ButtonProps extends ComponentProps<"button">, CustomProps {}

const MenuButton: FC<ButtonProps> = ({ className, lightMode, ...rest }) => {
  const mode = Boolean(lightMode);

  return (
    <button
      {...rest}
      className={twMerge(
        "w-16 h-16 outline-none p-4 rounded-md border-charcoal border flex justify-center items-center cursor-pointer",
        mode && "border-eggshell",
        className
      )}
    >
      {/* Change in animation */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div
          className={twMerge(
            "w-full h-[1.618px] bg-charcoal",
            mode && "bg-eggshell"
          )}
        ></div>
        <div
          className={twMerge(
            "w-full h-[1.618px] bg-charcoal",
            mode && "bg-eggshell"
          )}
        ></div>
      </div>
    </button>
  );
};

export default MenuButton;
