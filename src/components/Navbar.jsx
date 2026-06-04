import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isProgrammaticScrollRef.current) {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
        }, 100);
        return;
      }

      // Get all sections in the order they appear on the page
      const sections = ["hero", "features", "about", "pricing", "faq", "contact"];
      const scrollPosition = window.scrollY + 120;

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
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      isProgrammaticScrollRef.current = true;
      setActiveSection(sectionId);
      setMenuOpen(false);

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", sectionId: "hero" },
    { name: "Features", sectionId: "features" },
    { name: "About Us", sectionId: "about" },
    { name: "Pricing", sectionId: "pricing" },
    { name: "FAQs", sectionId: "faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-gray-100"
          : "bg-transparent py-5 border-transparent"
        }`}
    >
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7047eb] to-[#7a5fff] flex items-center justify-center text-white shadow-md shadow-[#7047eb]/30 group-hover:scale-105 transition-transform duration-300">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-gray-900">
            TMS<span className="text-[#7047eb]">.</span>
          </span>
        </button>
 
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${activeSection === link.sectionId
                  ? "text-[#7047eb]"
                  : "text-gray-600 hover:text-[#7047eb]"
                }`}
            >
              {link.name}
              {activeSection === link.sectionId && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7047eb] rounded-full" />
              )}
            </button>
          ))}
        </nav>
 
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${activeSection === "contact"
                ? "text-[#7047eb]"
                : "text-gray-600 hover:text-[#7047eb]"
              }`}
          >
            Contact Us
          </button>
          <button className="bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-[#7047eb]/20 hover:shadow-lg hover:shadow-[#7047eb]/35 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer">
            Start Free Trial
          </button>
        </div>
 
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-[#7047eb] text-2xl p-1.5 rounded-lg hover:bg-gray-100 transition cursor-pointer"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-5 flex flex-col gap-4 animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === link.sectionId
                    ? "bg-[#7047eb]/10 text-[#7047eb]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#7047eb]"
                  }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === "contact"
                  ? "bg-[#7047eb]/10 text-[#7047eb]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#7047eb]"
                }`}
            >
              Contact Us
            </button>
          </div>
          <div className="h-px bg-gray-100 my-1" />
          <button className="w-full bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-white py-3 rounded-xl font-semibold text-sm shadow-md shadow-[#7047eb]/20 hover:shadow-lg hover:shadow-[#7047eb]/35 active:scale-[0.98] transition-all text-center cursor-pointer">
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
