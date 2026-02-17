import Image from "next/image";

const LocationLayout = ({ children, aqi, wind, temperature, weather }) => {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        fill
        objectFit="cover"
        alt="Background"
        priority
      />
      <main className="z-50! w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationLayout;
