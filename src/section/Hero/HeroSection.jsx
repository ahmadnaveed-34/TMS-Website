import React, { useState } from "react";
import { Sparkles, TrendingUp, Layers, Cpu, Zap, CheckCircle2, Circle } from "lucide-react";
import brain from "../../assets/brain.png";
import progress from "../../assets/progress.png";
import herograph from "../../assets/herograph.png";
import heromap from "../../assets/heromap.png";
import reportingFeature from "../../assets/reportingFeature.png";
import ScrollReveal from "../../components/ScrollReveal";

const HeroSection = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const stats = [
    { label: "Automation Speed", value: "10x", desc: "Runs executions concurrently across test cycles" },
    { label: "Accuracy Ratio", value: "99.8%", desc: "Autonomous AI crawls verify interface issues" },
    { label: "Traceability Mapped", value: "100%", desc: "Direct requirement-to-defect verification paths" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fbfbfe] to-white pt-28 pb-20 text-center relative overflow-x-clip bg-dot-grid">
      {/* Glowing Mesh Gradients */}
      <div className="absolute top-[-25%] left-[-15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#7047eb]/10 to-[#7a5fff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#7a5fff]/10 to-[#4e3be5]/5 blur-[100px] pointer-events-none" />

      <div className="w-[95%] md:w-[90%] max-w-6xl mx-auto px-4 relative z-10">

        {/* Trust Badge / Active Users Strip */}
        <ScrollReveal animation="fade-in">
          <div className="mb-6 text-sm">
            <span className="bg-[#7047eb]/10 border border-[#7047eb]/20 text-[#7047eb] px-4.5 py-1.5 rounded-full inline-flex items-center gap-1.5 font-semibold tracking-wide shadow-sm shadow-[#7047eb]/5 animate-float-fast">
              <Sparkles className="w-3.5 h-3.5 text-[#7047eb]" /> Join 3k+ QA Leaders Globally
            </span>
          </div>
        </ScrollReveal>

        {/* Central Headline */}
        <ScrollReveal animation="slide-up" duration={900}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto mb-6">
            Test Smarter{" "}
            <img
              src={brain}
              alt="Brain Symbol"
              className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-1.5 align-middle animate-pulse"
            />
            , Not{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] relative">
              Harder.
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#7047eb]/15 rounded-full -z-10" />
            </span>
            <br />
            We’ve Got It Down to a Science.{" "}
            <Zap className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-1.5 text-[#7047eb] align-middle animate-float-medium" />
          </h1>
        </ScrollReveal>

        {/* Dynamic Subheadline */}
        <ScrollReveal animation="fade-in" delay={300}>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            Unleash autonomous agentic testing and CI/CD automation. The only Test Management Suite that connects requirements, test plans, and live defect analytics in one cohesive matrix.
          </p>
        </ScrollReveal>

        {/* Premium Action CTAs */}
        <ScrollReveal animation="slide-up" delay={400}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#7047eb] to-[#4e3be5] text-white px-9 py-4 rounded-xl font-bold shadow-lg shadow-[#7047eb]/25 hover:shadow-xl hover:shadow-[#7047eb]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
              Start Free Trial <Zap className="w-4 h-4" />
            </button>
            <button
              className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-9 py-4 rounded-xl font-bold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              onClick={() => {
                const element = document.getElementById("features-strip");
                if (element) {
                  const yOffset = -80;
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Explore Platform
            </button>
          </div>
        </ScrollReveal>

        {/* Social Proof Statistics Grid */}
        <ScrollReveal animation="fade-in" delay={500}>
          <div className="grid grid-cols-3 max-w-lg mx-auto gap-0 divide-x divide-gray-100 mb-16 border-t border-b border-gray-100 py-6">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-4 relative group cursor-pointer"
                onMouseEnter={() => setActiveTooltip(idx)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <span className="font-display font-black text-2xl sm:text-3xl text-gray-900 bg-gradient-to-r from-[#7047eb] to-[#4e3be5] text-transparent bg-clip-text">
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1 text-center">
                  {s.label}
                </span>

                {/* Popover micro-interaction details */}
                {activeTooltip === idx && (
                  <div className="absolute bottom-full mb-3 w-48 p-3 bg-gray-950 text-white text-[11px] leading-relaxed rounded-xl shadow-xl border border-gray-800 z-50 text-center animate-fade-in">
                    <p className="font-bold text-[#7a5fff] mb-1">{s.label}</p>
                    <p className="text-gray-400">{s.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Dashboard Preview & Floating SQA Badges */}
        <ScrollReveal animation="slide-up" delay={600} duration={1200}>
          <div className="relative max-w-4xl mx-auto mt-6 px-4 md:px-0">

            {/* Ambient Back Glow */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#7047eb]/20 to-[#7a5fff]/20 blur-2xl -z-10 opacity-70" />

            {/* Main Mockup Dashboard */}
            <div className="rounded-3xl border border-gray-100 bg-white p-2.5 shadow-2xl relative z-20 overflow-hidden group">

              {/* Browser navigation header bar */}
              <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-3.5 rounded-t-2xl border-b border-gray-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="h-5 bg-white border border-gray-200/60 rounded-md text-[9px] text-gray-400 px-6 py-0.5 ml-4 flex items-center justify-center font-semibold">
                  tms-platform.com/dashboard/analytics
                </div>
              </div>

              <img
                src={reportingFeature}
                alt="Test Management Suite Dashboard Analytics"
                className="w-full h-auto rounded-b-2xl border-t border-gray-100 transition-transform duration-700 group-hover:scale-[1.005]"
              />
            </div>

            {/* Left Floating Card: SQA Executing Badge */}
            <div className="absolute left-[-60px] bottom-[20%] w-[240px] z-30 hidden lg:block animate-float-slow">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hover:border-[#7047eb]/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center border border-green-100">
                    <Cpu className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">AI SQA Agent</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                      <p className="font-display font-extrabold text-sm text-gray-900">Running cycles...</p>
                    </div>
                  </div>
                </div>
                <img
                  src={herograph}
                  alt="Quality analytics curve card"
                  className="w-full h-auto rounded-xl mt-3 border border-gray-50"
                />
              </div>
            </div>

            {/* Right Floating Card: Traceability Badge */}
            <div className="absolute right-[-60px] top-[15%] w-[240px] z-30 hidden lg:block animate-float-medium">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hover:border-[#7047eb]/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#7047eb] flex items-center justify-center border border-indigo-100">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Traceability Matrix</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7047eb]" />
                      <p className="font-display font-extrabold text-sm text-gray-900">100% Verified</p>
                    </div>
                  </div>
                </div>
                <img
                  src={heromap}
                  alt="Test case distribution roadmap"
                  className="w-full h-auto rounded-xl mt-3 border border-gray-50"
                />
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default HeroSection;
