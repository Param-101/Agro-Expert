"use client";

import Image from "next/image";
import joinus from "@/public/images/Join-Image.png";

const JoinUs = () => {
  return (
    <section id="joinus" className=" flex py-[70px] container mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-8 place-self-center text-center sm:text-left justify-self-start mx-4">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold mt-[-50px]">
            Thousands of people have already joined our community
            <br />
          </h1>

          <p className=" text-slate-600 text-base sm:text-lg lg:text-xl mb-6">
          Elevate your farming with IoT devices. Empower your fields, cultivate success, and reap the benefits of precision agriculture. Embrace innovation for a greener future. 
          </p>
        </div>

        <div className=" col-span-4 place-self-center mt-6 lg:mt-0 relative">
          <div className=" w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]">
            <Image
              src={joinus}
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

export default JoinUs;
