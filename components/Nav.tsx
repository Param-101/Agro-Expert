import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className="fixed mx-auto border border-[#d7d7d7] top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100 "
      id="navbar"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-black font-semibold"
        >
          AlgoExpert
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
