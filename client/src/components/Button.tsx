import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Children to be rendered inside the button (text, icons, spans, etc.)
   */
  children: ReactNode;
  /**
   * Enable lightMode (text/border adjustments for dark background usage)
   */
  lightMode?: boolean;
  /**
   * Optional: Add additional styling using className
   */
  className?: string;
  to?: string;
}

const Button = ({
  children,
  lightMode = false,
  className,
  to,
  ...rest
}: ButtonProps) => {
  const isLight = Boolean(lightMode);

  return (
    <Link to={to || "/"}>
      <button
        {...rest}
        className={twMerge(
          // Layout & structure
          "inline-flex h-14 md:h-16 items-center justify-center px-6 rounded-md",
          // Border & background
          "border transition-all duration-300 ease-out group",
          // Text & color
          isLight
            ? "border-eggshell text-eggshell"
            : "border-charcoal text-charcoal",
          // Focus ring
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-charcoal/50 cursor-pointer",
          // Responsive adjustments
          "text-base font-medium",
          className
        )}
      >
        {/* Inner span allows nested hover animations (text + icon) */}
        <span className="inline-flex items-center gap-2">{children}</span>
      </button>
    </Link>
  );
};

export default Button;
