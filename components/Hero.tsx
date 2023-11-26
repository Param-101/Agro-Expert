"use client";

import Image from "next/image";
import logo from "public/images/Hero-Image.png";

const Hero = () => {
  return (
    <section className=" flex py-[70px] container mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-8 place-self-center text-center sm:text-left justify-self-start mx-4">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold lg:mt-[100px]">
          Empower
            <span className=" text-transparent bg-clip-text bg-[#FF5F5F]">
             {" "}Agriculture{" "}
            </span>
            with
            <span className=" text-transparent bg-clip-text bg-[#0ED3FE]">
             {" "}Smart{" "}
            </span>
            Monitoring

            <br />
          </h1>

          <p className=" text-slate-600 text-base sm:text-lg lg:text-xl mb-6">
          Revolutionize Agriculture Monitoring: Precision, Efficiency, Sustainable Farming Solutions Await.
          </p>

          <div className="">
            <button className="px-12 py-3 rounded-full hover:bg-[#ffb846] text-white w-[100%] sm:w-fit bg-[#FDA006] lg:mt-8 lg:px-16 lg:py-4 drop-shadow-xl">
              <a href="#contact">Get Started</a>
            </button>

          </div>
        </div>

        <div className=" col-span-4 place-self-center mt-6 lg:mt-0 relative">
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={logo}
              alt={"logo"}
              className=" "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
