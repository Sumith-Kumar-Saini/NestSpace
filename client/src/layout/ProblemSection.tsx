import { CDImage, CWImage } from "@/utils/image";
import type { FC } from "react";

const ProblemSection = () => {
  return (
    <div className="w-full h-fit px-4 md:px-10">
      <div className="flex flex-col gap-16">
        <ImageContent
          src={CWImage}
          content={[
            "You sit down to work.",
            "A tangle of cables. Harsh lighting. Mismatched gear.",
            "Tabs open. Mind scattered.",
            "This isn’t remote work. It’s remote chaos.",
          ]}
          alt="Cluttered workspace with mismatched gear"
        />

        <ImageContent
          src={CDImage}
          content={[
            "A desk with no clutter.",
            "Lighting that shifts with your energy.",
            "Tools that vanish when you don’t need them.",
            "A workspace that protects your flow.",
          ]}
          alt="Cluttered workspace with mismatched gear"
        />
      </div>

      <div className="w-full h-[50vh] flex justify-center items-center">
        <h3 className="text-3xl font-grotesk font-medium text-center">NestSpace is your new normal.</h3>
      </div>
    </div>
  );
};

export default ProblemSection;

interface ImageContentProps {
  src: string;
  content: string[];
  alt: string;
}

const ImageContent: FC<ImageContentProps> = ({ content, src, alt }) => {
  return (
    <div className="w-full h-[75vh] flex md:flex-row flex-col gap-6 border border-glowPeach p-2 rounded-md bg-sandBrown/20">
      <div className="w-full h-1/2 md:h-full rounded-sm overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>
      <div className="w-full h-1/2 md:h-full flex flex-col justify-end gap-4 md:pl-4">
        <div className="w-full h-fit text-lg md:text-xl leading-5 font-satoshi font-normal flex flex-col text-charcoal">
          {content.map((text, idx) => (
            <span className="inline-block" key={idx}>
              {text}
            </span>
          ))}
        </div>
        <div className="w-full h-8 bg-sandBrown/50 rounded-sm"></div>
      </div>
    </div>
  );
};
