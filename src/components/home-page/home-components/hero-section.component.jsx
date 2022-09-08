const HeroSection = () => {
  return (
    <div className="px-6 md:px-10">
      <div className="bg-zinc-200 rounded-2xl my-10 shadow-xl">
        <div className="grid grid-cols-2 items-center md:gap-12 p-4">
          <h1 className="text-lg md:text-2xl font-bold pr-4">
            Get top-quality kitchen amenities
          </h1>
          <img
            className="w-full"
            src="https://i.ibb.co/q7k4Qv9/hero-image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
