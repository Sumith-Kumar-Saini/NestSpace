import Button from "@/components/Button";
import HeadLogo from "@/components/HeadLogo";
import MenuButton from "@/components/MenuButton";
import { twMerge } from "tailwind-merge";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("w-full", className)}>
      <div className="w-full py-4 px-10">
        {/* NavBar */}
        <nav className="w-full h-full relative">
          {/* CTA */}
          <Button lightMode={true} className="absolute left-0">CTA Nest Modular Desk Kit</Button>

          {/* Logo */}
          <HeadLogo lightMode={true} />

          {/* Menu */}
          <MenuButton lightMode={true} className="absolute right-0" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
