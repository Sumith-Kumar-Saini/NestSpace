import TestScroll from "@/components/TestScroll";
import React from "react";

const HeroNavBar = () => {
  return (
    <header className="w-full absolute top-0 z-10">
      <nav className="flex justify-between items-center h-16 px-4 md:px-10">
        <button
          className="hidden md:flex items-center border border-charcoal rounded-md px-4 py-2 text-charcoal font-satoshi text-md font-medium"
          aria-label="CTA for Nest Modular Desk Kit"
        >
          CTA Nest Modular Desk Kit
        </button>

        <a
          href="/"
          aria-current="page"
          className="flex items-center gap-2 font-grotesk text-2xl font-bold text-charcoal uppercase md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <span>Nest</span>
          <span className="h-6 w-px bg-amber-400"></span>
          <span className="font-satoshi font-light capitalize">Space</span>
        </a>

        <button
          className="flex md:w-16 md:h-16 w-12 h-12 justify-center items-center border border-charcoal rounded-md p-3"
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-2">
            <span className="w-full h-[1.618px] bg-charcoal"></span>
            <span className="w-full h-[1.618px] bg-charcoal"></span>
          </span>
        </button>
      </nav>
    </header>
  );
};

const HeroText = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center px-6 md:px-10 pt-40 gap-6 z-[1]">
      <h1 className="text-charcoal font-grotesk font-medium text-5xl md:text-7xl 2xl:text-8xl leading-tight">
        <span>Your Desk.</span>
        <br />
        <span>Your Ritual.</span>
      </h1>
      <p className="text-charcoal text-base md:text-lg 2xl:text-2xl leading-relaxed md:w-1/2">
        You don’t need more productivity hacks. You need space.
      </p>
      <button className="group w-fit flex items-center gap-2 border border-charcoal rounded-md px-6 py-3 mt-4 text-charcoal font-satoshi text-md font-medium transition duration-300">
        <span>Learn More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-0 opacity-0 pl-0 group-hover:w-6 group-hover:pl-2 group-hover:opacity-100 transition-all duration-300"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8L22 12L18 16"></path>
          <path d="M2 12H22"></path>
        </svg>
      </button>
    </section>
  );
};

const HeroImage = () => {
  return (
    <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 md:h-[50rem] lg:h-[48.125rem] flex justify-end">
      <img
        src="/src/assets/images/Nest%20Modular%20Desk%20Kit%20%5BUpdate%20front%20left%20top%20view%5D%20-%204%20RMBG.png"
        alt="Nest Modular Desk Kit"
        className="h-full w-auto object-contain object-bottom"
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-sandBrown/30 overflow-hidden">
      <div
        className="absolute w-full h-full top-0 left-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1.7 -0.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E)",
        }}
      ></div>

      <HeroNavBar />

      <div className="w-full h-full flex flex-col md:flex-row">
        <HeroText />
        <HeroImage />
      </div>
      <TestScroll />
    </div>
  );
};

export default HeroSection;
