import ReactLenis from "lenis/react";
import { Outlet } from "react-router";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import BGNoise from "@/components/BGNoise";

const App = () => {
  const lenisOptions = {
    lerp: 0.1, // Controls interpolation for smoothness
    duration: 1.5, // Defines how long a scroll should take
    smoothTouch: false, // Enable/disable smooth scroll for touch devices
    smooth: true,
  };

  return (
    <BGNoise className="w-full relative flex justify-center">
      <ReactLenis root options={lenisOptions}>
        <Navbar className="absolute top-0 z-20" />
        <Outlet />
        <Footer />
      </ReactLenis>
    </BGNoise>
  );
};

export default App;
