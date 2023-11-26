"use client";
import { Nav, Stats } from "@/components";

const Dashboard = () => {
  return (
    <main id="dashboard" className=" flex flex-col contaniner lg:mt-[100px] mt-[70px]">
      <section className="" >
        <Nav />
      </section>

      <h1 className=" text-center text-black mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold lg:mt-[100px]">
        Cloud-based
        <span className=" text-transparent bg-clip-text bg-[#FF5F5F]">
          {" "}
          Agricultural{" "}
        </span>
        Monitoring
        <span className=" text-transparent bg-clip-text bg-[#0ED3FE]">
          {" "}
          System{" "}
        </span>
        <br />
      </h1>

      <section>
        <Stats />
      </section>
    </main>
  );
};

export default Dashboard;
