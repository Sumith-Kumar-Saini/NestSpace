import { Instagram, Twitter, Dribbble } from "lucide-react";
import { Link } from "react-router"; // Not used since you're in data mode, but icons still make sense

export default function Footer() {
  return (
    <footer className="bg-eggshell text-charcoal font-satoshi px-6 md:px-10 py-12 border-t border-softGray">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: Brand + Nav */}
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <p className="text-lg font-grotesk font-medium">
            NestSpace™ — Reclaim Your Focus.
          </p>

          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-sandBrown transition-colors">
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-sandBrown transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:text-sandBrown transition-colors"
            >
              About
            </Link>
            <Link
              to="/login"
              className="hover:text-sandBrown transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>

        {/* Right: Social */}
        <div className="flex gap-6 text-charcoal">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 hover:text-sandBrown transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 hover:text-sandBrown transition-colors" />
          </a>
          <a
            href="https://dribbble.com"
            aria-label="Dribbble"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dribbble className="w-5 h-5 hover:text-sandBrown transition-colors" />
          </a>
        </div>
      </div>

      {/* Base Line */}
      <div className="mt-10 text-center text-sm text-charcoal opacity-60">
        © 2025 NestSpace
      </div>
    </footer>
  );
}
