import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-sandBrown/30 relative overflow-hidden">
      {/* Left Content */}
      <HeroContent />

      {/* Right Image */}
      <HeroImage />
    </div>
  );
};

export default Hero;
