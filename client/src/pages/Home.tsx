import BGNoise from "@/components/BGNoise";
import TestScroll from "@/components/TestScroll";
import Hero from "@/layout/Hero";
import Navbar from "@/layout/Navbar";

const Home = () => {
  return (
    <BGNoise className="w-full relative">
      <Navbar className="absolute top-0 z-10" />
      <Hero />
      <TestScroll />
    </BGNoise>
  );
};

export default Home;
