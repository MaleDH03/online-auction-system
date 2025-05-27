import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2A1B3D] border-t border-[#3A2F5F]">
      <div className="container flex flex-col items-center justify-between px-6 py-6 mx-auto lg:flex-row">
        <span className="text-xl font-semibold text-white font-serif">
        NeonBid
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <Link
            to="#"
            className="text-sm text-white transition-colors duration-300 hover:text-[#1E90FF]"
          >
            Home
          </Link>

          <Link
            to="#"
            className="text-sm text-white transition-colors duration-300 hover:text-[#1E90FF]"
          >
            Features
          </Link>

          <Link
            to="#"
            className="text-sm text-white transition-colors duration-300 hover:text-[#1E90FF]"
          >
            FAQ
          </Link>

          <Link
            to="#"
            className="text-sm text-white transition-colors duration-300 hover:text-[#1E90FF]"
          >
            Help
          </Link>

          <Link
            to="#"
            className="text-sm text-white transition-colors duration-300 hover:text-[#1E90FF]"
          >
            Privacy
          </Link>
        </div>

        <p className="mt-6 text-sm text-[#CCCCCC] lg:mt-0">
          © Copyright 2024 Kipa Auction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;