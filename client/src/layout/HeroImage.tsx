import { NMDKImage as Image } from "@/utils/image";

const HeroImage = () => {
  return (
    <div className="image w-full md:w-1/2 h-1/2 md:h-[50rem] lg:h-[48.125rem] absolute flex justify-end right-0 bottom-0">
      <img
        className="w-auto h-full object-contain object-bottom"
        src={Image}
        alt="Hero Image"
      />
    </div>
  );
};

export default HeroImage;
