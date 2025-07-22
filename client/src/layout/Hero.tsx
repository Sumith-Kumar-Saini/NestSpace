import Button from "@/components/Button";
import { MoveRight } from "lucide-react";
import { NMDKImage as HeroImage } from "@/utils/image";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-sandBrown/30 relative overflow-hidden">
      <div className="content w-full h-full pt-20 md:pt-40 px-4 md:px-10 gap-3 md:absolute z-[1] left-0 top-0 flex flex-col justify-start items-start">
        <h1 className="text-5xl/10 md:text-7xl/15 2xl:text-8xl/20 font-grotesk text-charcoal font-medium flex flex-col">
          <span>Your Desk.</span>
          <span>Your Ritual.</span>
        </h1>
        <p className="md:w-1/2 text-sm md:text-lg 2xl:text-2xl leading-4 flex gap-1 text-charcoal flex-wrap">
          <span className="w-fit">
            You don&#8217;t need more productivity hacks.
          </span>
          <span className="w-fit">You need space.</span>
        </p>
        <Button className="px-8 mt-6 group duration-300">
          <span className="flex">
            <span className="">Learn More</span>
            <MoveRight
              className="w-0 pl-0 opacity-0 group-hover:pl-4 group-hover:w-10 group-hover:opacity-100 duration-300"
              strokeWidth={"1"}
            />
          </span>
        </Button>
      </div>
      <div className="image w-full md:w-1/2 h-1/2 md:h-[50rem] lg:h-[48.125rem] absolute flex justify-end right-0 bottom-0">
        <img
          className="w-auto h-full object-contain object-bottom"
          src={HeroImage}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
