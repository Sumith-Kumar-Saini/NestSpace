import { Outlet } from "react-router";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import BGNoise from "@/components/BGNoise";

const App = () => {
  return (
    <BGNoise className="w-full relative flex justify-center">
      <Navbar className="absolute top-0 z-20" />
      <Outlet />
      <Footer />
    </BGNoise>
  );
};

export default App;
