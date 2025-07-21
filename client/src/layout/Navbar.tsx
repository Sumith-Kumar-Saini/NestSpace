import Button from "@/components/Button";
import HeadLogo from "@/components/HeadLogo";
import MenuButton from "@/components/MenuButton";
import { twMerge } from "tailwind-merge";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("w-full", className)}>
      <div className="w-full h-12 md:h-16 my-4 px-4 md:px-10">
        {/* NavBar */}
        <nav className="w-full h-full relative flex justify-between items-center md:block">
          {/* CTA */}
          <Button className="static md:absolute left-0 hidden md:block">
            CTA Nest Modular Desk Kit
          </Button>

          {/* Logo */}
          <HeadLogo className="static md:absolute left-0 md:-translate-x-1/2 md:left-1/2 px-0" />

          {/* Menu */}
          <MenuButton className="static md:absolute right-0" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
