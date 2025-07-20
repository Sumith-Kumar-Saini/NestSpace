import { HeroImage } from "@/utils/image";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="image absolute w-full h-full">
        <img
          className="w-full h-full object-cover object-center "
          src={HeroImage}
          alt="Hero Image"
        />
      </div>
      <div className="content">Hello</div>
    </div>
  );
};

export default Hero;
