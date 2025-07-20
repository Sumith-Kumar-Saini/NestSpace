import Hero from "@/layout/Hero";
import Navbar from "@/layout/Navbar";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar className="absolute top-0 z-10" />
      <Hero />
    </div>
  );
};

export default Home;
