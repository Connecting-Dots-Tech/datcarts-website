import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center text-center max-md:bg-[url('/assets/bgheromob.svg')]">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-[1] bg-[url('/assets/Herobg.webp')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center px-5 pt-32 md:pt-20">
        <h1 className="mb-3 text-5xl font-bold text-white md:text-6xl lg:text-4xl">
          REVOLUTIONIZING RETAIL SECTOR
        </h1>

        <p className="mb-5 max-w-[90%] text-sm font-normal text-[#ddd] md:text-base">
          Enhancing Shopping Boosting Efficiency Driving Profit
        </p>

        <div className="relative mt-3 h-auto w-[120%] animate-slide-up md:w-[26rem]">
          <Image
            src="/assets/cart.png"
            alt="Smart Shopping Cart"
            width={416}
            height={416}
            className="h-auto w-full"
            priority
            sizes="(max-width: 768px) 120vw, 416px"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
