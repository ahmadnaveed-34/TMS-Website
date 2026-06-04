import React, { useState } from "react";
import { Mail, Send, Linkedin, Instagram, Twitter, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 border-t border-gray-900 mt-20 relative overflow-hidden" id="footer">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7047eb]/10 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7a5fff]/5 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-900">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-3xl tracking-tight text-white select-none flex items-center gap-1.5">
                <span className="bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-transparent bg-clip-text">TMS</span>
                <span className="w-2 h-2 rounded-full bg-[#7047eb] animate-pulse" />
              </span>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Empowering SQA teams with autonomous agentic testing, seamless execution, and end-to-end requirement traceability.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/purelogics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7047eb] hover:border-[#7047eb] transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/purelogics.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7047eb] hover:border-[#7047eb] transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/PureLogics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7047eb] hover:border-[#7047eb] transition-all duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Modules */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-display text-base tracking-wider uppercase">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Agentic Testing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Traceability Matrix
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Test Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("why-choose-us")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Sanity Checklist
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-display text-base tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-gray-500 cursor-default">Documentation</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-[9px] font-bold text-[#7047eb] uppercase tracking-wider">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500 cursor-default">API Reference</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-[9px] font-bold text-[#7047eb] uppercase tracking-wider">Soon</span>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left">
                  Help Desk & FAQ
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500 cursor-default">SQA Blog</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-[9px] font-bold text-[#7047eb] uppercase tracking-wider">Soon</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-display text-base tracking-wider uppercase">Newsletter</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay updated with the latest in AI-driven SQA and test planning.
            </p>
            
            <form onSubmit={handleSubscribe} noValidate className="relative mt-2">
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#7047eb] transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-[#7047eb] hover:bg-[#7a5fff] text-white p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md shadow-[#7047eb]/10"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Metadata Panel */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p>© 2026 TMS Platform. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#7047eb]" />
              <span className="text-xs uppercase tracking-widest font-bold">SOC-2 Certified</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4 text-[#7047eb]" />
              <span className="text-xs uppercase tracking-widest font-bold">GDPR Compliant</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <span className="cursor-not-allowed hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="cursor-not-allowed hover:text-gray-300 transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
