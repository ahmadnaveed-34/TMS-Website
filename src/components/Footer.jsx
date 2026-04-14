import React from "react";
import logo from "../assets/logo.png";
import { IoLogoLinkedin } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-[95%] md:w-[90%] max-w-7xl mx-auto bg-[#1A1A1A] text-white pt-8 pb-12 rounded-t-[40px] mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </div>

        {/* Description */}
        <div className="text-center py-7">
          <p className="text-gray-300 text-base sm:text-lg">
            Empowering Your Test, Enhancing Your Success,
            <br className="hidden sm:block" />
            Every Step of the Way.
          </p>
        </div>

        {/* Social Icons with border and controlled width */}
        <div className="w-[70%] mx-auto border-b border-zinc-400 pb-6">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/purelogics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#262626] rounded-lg"
            >
              <IoLogoLinkedin className="text-white text-[24px]" />
            </a>
            <a
              href="https://www.instagram.com/purelogics.official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#262626] rounded-lg"
            >
              <PiInstagramLogoFill className="text-white text-[24px]" />
            </a>
            <a
              href="https://x.com/PureLogics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#262626] rounded-lg"
            >
              <BsTwitterX className="text-white text-[24px]" />
            </a>
          </div>
        </div>

        {/* Bottom Links with controlled width */}
        <div className="w-[70%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2026 TMS. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm sm:text-base justify-center flex">
            From Planning to Execution
          </p>
          <p className="text-gray-300 text-sm sm:text-base md:text-right">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
