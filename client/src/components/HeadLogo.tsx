import type { FC } from "react";
import { NavLink, type To } from "react-router";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
  to?: string | To;
  lightMode?: unknown;
}

const HeadLogo: FC<LogoProps> = ({ className, lightMode, to }) => {
  const mode = Boolean(lightMode);

  return (
    <NavLink
      to={to || "/"}
      className={twMerge(
        "h-16 w-fit p-4 flex justify-center items-center gap-2.5",
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
    </NavLink>
  );
};

export default HeadLogo;
