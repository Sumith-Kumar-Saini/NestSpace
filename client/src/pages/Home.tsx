import CommunityCTA from "@/layout/CommunityCTA";
import Hero from "@/layout/Hero";
import SplitCard from "@/layout/ProblemSection";
import ProductSpotLight from "@/layout/ProductSpotLight";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full h-[50vh] flex justify-center items-center">
        <h3 className="text-3xl font-grotesk font-medium text-center">
          Now Image This:
        </h3>
      </div>
      <SplitCard />
      <ProductSpotLight />
      <CommunityCTA />
    </>
  );
};

export default Home;
