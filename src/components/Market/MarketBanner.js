import foodImage from "./foods.jpg";

const MarketBanner = () => {
  return (
    <div className="w-full h-96 overflow-hidden relative">
      <img
        src={foodImage}
        className="w-full h-full object-cover object-center brightness-75"
        alt="Food Header"
      />
      <div className="absolute z-10 -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 uppercase font-light">
        <h1 className="mt-20 text-xl sm:text-3xl font-normal md:font-thin md:text-5xl lg:text-6xl text-white text-center tracking-widest ">
          Find Buy Eat
        </h1>
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center tracking-wider">
          The Yummy food
        </h2>
      </div>
    </div>
  );
};

export default MarketBanner;
