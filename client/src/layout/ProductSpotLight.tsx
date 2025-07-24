import { NMDKFrontImage as Image } from "@/utils/image";

const ProductSpotLight = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[50vh] flex justify-center items-center bg-sandBrown/20 mb-1 px-4 md:px-10">
        <h3 className="text-3xl font-grotesk font-medium text-center">
          The Nest Modular Desk Kit
        </h3>
      </div>
      <div className="w-full h-[75vh] flex justify-center bg-sandBrown/20">
        <div className="max-w-7xl relative px-4 md:px-10 w-full h-[75vh] flex md:flex-row flex-col gap-6 border border-glowPeach p-2 rounded-md">
          <div className="content w-full h-fit md:h-full py-8 z-[1] left-0 top-0 flex flex-col gap-3">
            {/* Heading */}
            <h2 className="text-4xl font-grotesk text-charcoal font-medium flex flex-col">
              <span className="block">Build your own focus ritual.</span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl leading-5 flex gap-1 font-satoshi font-normal text-charcoal flex-wrap">
              <span>
                This isn't just a desk. It's a modular, adaptive workspace
                system engineered to reduce friction and elevate your deep work
                state.
              </span>
            </p>
          </div>
          <div className="w-full h-full rounded-sm overflow-hidden">
            <img
              src={Image}
              alt="Nest Modular Desk"
              className="w-full h-full aspect-square object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpotLight;
