import type { FC, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const NoiseSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1.7 -0.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const BGNoise: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={twMerge("w-full relative", className)} {...rest}>
      <div
        className="noise w-full h-screen absolute top-0 left-0 z-20 cursor-none pointer-events-none"
        style={{ backgroundImage: NoiseSVG, opacity: .2 }}
      ></div>
      <div className="w-full h-full absolute top-0 left-0">{children}</div>
    </div>
  );
};

export default BGNoise;
