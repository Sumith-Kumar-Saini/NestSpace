import type { FC } from "react";
import { Link, type To } from "react-router";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
  to?: string | To;
  lightMode?: unknown;
}

const HeadLogo: FC<LogoProps> = ({ className, lightMode, to }) => {
  const mode = Boolean(lightMode);

  return (
    <Link
      to={to || "/"}
      className={twMerge(
        "h-16 w-fit px-1   py-4 flex justify-center items-center gap-2.5",
        className
      )}
    >
      <div
        className={twMerge(
          "font-grotesk font-bold uppercase text-2xl text-charcoal",
          mode && "text-eggshell"
        )}
      >
        Nest
      </div>
      <div className="h-6 w-px bg-amber-400"></div>
      <div
        className={twMerge(
          "font-satoshi font-light capitalize text-2xl text-charcoal",
          mode && "text-eggshell"
        )}
      >
        Space
      </div>
    </Link>
  );
};

export default HeadLogo;
