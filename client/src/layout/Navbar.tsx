import HeadLogo from "@/components/HeadLogo";
import MenuButton from "@/components/MenuButton";
import { twMerge } from "tailwind-merge";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("w-full flex justify-center", className)}>
      <div className="w-full max-w-7xl h-12 md:h-16 my-4 px-4 md:px-10">
        {/* NavBar */}
        <nav className="w-full h-full flex justify-between items-center">
          {/* Logo */}
          <HeadLogo />

          {/* Menu */}
          <MenuButton />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
