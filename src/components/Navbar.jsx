import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Skip scroll detection during programmatic scrolling
      if (isScrollingRef.current) return;

      // Get all sections in the order they appear on the page
      const sections = [
        "hero",
        "features",
        "about",
        "pricing",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120; // Slightly smaller offset

      // Find which section is currently in view
      let currentSection = "hero";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Immediately set the active section to lock it
      setActiveSection(sectionId);
      isScrollingRef.current = true;

      // Clear any existing timeout
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const offset = 80; // Adjusted offset for better alignment
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Maintain the lock for a sufficient duration to cover the smooth scroll
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        scrollTimeoutRef.current = null;
      }, 1200);

      setMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <div
      className={`flex justify-center sticky top-0 z-50 bg-transparent transition-all duration-300 ${
        isScrolled ? "py-0" : "py-3"
      }`}
    >
      <div className="w-[95%] md:w-[80%] bg-[#1A1A1AB2] px-4 md:px-6 py-5 rounded-xl shadow-md backdrop-blur-sm relative transition-all duration-300">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between relative">
          <div className="flex gap-6">
            <NavLinks
              scrollToSection={scrollToSection}
              activeSection={activeSection}
            />
          </div>

          <div className="md:hidden lg:block absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Logo" className="w-9 h-9" />
          </div>

          <div className="flex gap-4">
            <NavButtons
              scrollToSection={scrollToSection}
              activeSection={activeSection}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex items-center text-white text-xl font-bold">
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <NavLinks
              scrollToSection={scrollToSection}
              activeSection={activeSection}
            />
            <NavButtons
              scrollToSection={scrollToSection}
              activeSection={activeSection}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const NavLinks = ({ scrollToSection, activeSection }) => {
  const links = [
    { name: "Home", sectionId: "hero" },
    { name: "Features", sectionId: "features" },
    { name: "About Us", sectionId: "about" },
    { name: "FAQ's", sectionId: "faq" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 text-sm w-full md:w-auto">
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => scrollToSection(link.sectionId)}
          className={`transition px-3 py-1.5 rounded-md w-full md:w-auto text-left ${
            activeSection === link.sectionId
              ? "bg-white text-black hover:bg-gray-200"
              : "text-white hover:text-gray-300"
          }`}
        >
          {link.name}
        </button>
      ))}
    </div>
  );
};

const NavButtons = ({ scrollToSection, activeSection }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
    <button
      onClick={() => scrollToSection("contact")}
      className={`text-sm transition px-3 py-1.5 rounded-md ${
        activeSection === "contact"
          ? "bg-white text-black hover:bg-gray-200"
          : "text-white hover:text-gray-300"
      }`}
    >
      Contact Us
    </button>
    <button
      onClick={() => scrollToSection("pricing")}
      className={`text-sm transition px-3 py-1.5 rounded-md ${
        activeSection === "pricing"
          ? "bg-white text-black hover:bg-gray-200"
          : "text-white hover:text-gray-300"
      }`}
    >
      Pricing
    </button>
    <button className="text-sm px-4 py-1.5 rounded-md bg-gradient-to-r from-[#7A5FFF] to-[#4E3BE5] text-white hover:opacity-90 transition">
      Start Free Trial
    </button>
  </div>
);

export default Navbar;
