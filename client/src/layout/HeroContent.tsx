import Button from "@/components/Button";
import { MoveRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="content w-full h-full pt-20 md:pt-40 px-4 md:px-10 gap-2 md:gap-3 md:absolute z-[1] left-0 top-0 flex flex-col justify-start items-start">
      {/* Heading */}
      <h1 className="text-5xl/10 md:text-7xl/15 2xl:text-8xl/20 font-grotesk text-charcoal font-medium flex flex-col">
        <span className="block">Your Desk.</span>
        <span className="block">Your Ritual.</span>
      </h1>

      {/* Subtext */}
      <p className="md:w-1/2 text-sm md:text-lg 2xl:text-2xl leading-4 flex gap-1 text-charcoal flex-wrap">
        <span className="w-fit">
          You don&#8217;t need more productivity hacks.
        </span>
        <span className="w-fit">You need space.</span>
      </p>

      {/* CTA Button */}
      <Button className="group mt-4 md:mt-6">
        <span className="flex items-center">
          <span>Learn More</span>
          <MoveRight
            className="w-0 opacity-0 translate-x-[-10px] group-hover:ml-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            strokeWidth={1}
          />
        </span>
      </Button>
    </div>
  );
};

export default HeroContent;
