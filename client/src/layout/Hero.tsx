import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="w-full flex justify-center bg-sandBrown/30">
      <div className="w-full max-w-7xl h-screen flex flex-col md:flex-row relative overflow-hidden">
        {/* Left Content */}
        <HeroContent />

        {/* Right Image */}
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
