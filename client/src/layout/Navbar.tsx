import HeadLogo from "@/components/HeadLogo";
import MenuButton from "@/components/MenuButton";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className={twMerge("w-full flex justify-center", className)}>
      <div className="w-full max-w-7xl h-12 md:h-16 my-4 px-4 md:px-10">
        {/* NavBar */}
        <nav className="w-full h-full flex justify-between items-center">
          {/* Logo */}
          <HeadLogo />

          {/* Menu Button */}
          <MenuButton onClick={toggleMenu} />
        </nav>
      </div>

      {/* Full Screen Menu */}
      <div
        className={twMerge(
          "menu fixed top-0 left-0 w-full h-screen bg-[var(--color-eggshell)] transition-transform duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-[var(--color-charcoal)] font-[var(--font-grotesk)] text-3xl md:text-5xl hover:text-[var(--color-sandBrown)] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 md:top-6 md:right-10 text-[var(--color-charcoal)] hover:text-[var(--color-sandBrown)] transition-colors duration-200"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
