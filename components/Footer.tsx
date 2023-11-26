import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-4xl text-black font-semibold"
        >
          AlgoExpert
        </Link>
        <p className="text-slate-600 text-sm lg:pt-3">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
