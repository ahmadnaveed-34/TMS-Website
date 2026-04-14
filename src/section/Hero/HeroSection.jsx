import React from "react";
import brain from "../../assets/brain.png";
import progress from "../../assets/progress.png";
import herograph from "../../assets/herograph.png";
import heromap from "../../assets/heromap.png";
import ScrollReveal from "../../components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="bg-white pt-10 pb-5 text-center">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Top Badge */}
        <ScrollReveal animation="fade-in">
          <div className="mb-4 text-sm text-gray-500">
            <span className="bg-gray-100 px-4 py-1 rounded-full inline-block">
              👥 Join 3k+ Active Users
            </span>
          </div>
        </ScrollReveal>

        {/* Images + Headline Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4">
          {/* Left Graphic */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <ScrollReveal animation="slide-right" delay={200}>
              <img
                src={herograph}
                alt="graph"
                className="max-h-[250px] w-auto object-contain"
              />
            </ScrollReveal>
          </div>

          {/* Headline Center */}
          <div className="w-full lg:w-1/2 mx-auto">
            <ScrollReveal animation="fade-in" duration={1000}>
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-snug space-y-2">
                {/* Line 1 */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span>Test Smarter</span>
                  <img src={brain} alt="Brain" className="w-8 h-8" />
                  <span>, Not</span>
                </div>

                {/* Line 2 */}
                <div>Harder We’ve Got It Down</div>

                {/* Line 3 */}
                <div className="flex justify-center items-center gap-2">
                  <span>to a Science.</span>
                  <img src={progress} alt="Progress" className="w-8 h-8" />
                </div>
              </h1>
            </ScrollReveal>
          </div>

          {/* Right Graphic */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <ScrollReveal animation="slide-left" delay={200}>
              <img
                src={heromap}
                alt="map"
                className="max-h-[250px] w-auto object-contain"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Subheading */}
        <ScrollReveal animation="fade-in" delay={400}>
          <p className="text-gray-500 font-semibold max-w-2xl mx-auto mb-6 text-base sm:text-lg">
            Whether you're squashing bugs or optimizing workflows, our TMS gives
            you the perfect balance of efficiency and sanity.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal animation="slide-up" delay={500}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-gradient-to-r from-[#7A5FFF] to-[#4E3BE5] text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">
              Start Free Trial
            </button>
            <button
              className="border border-gray-300 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
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
              View Features
            </button>
          </div>
        </ScrollReveal>

        {/* Reviews */}
        <ScrollReveal animation="fade-in" delay={600}>
          <div className="text-sm text-gray-500">
            <div className="flex justify-center items-center gap-1 mb-1">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="font-semibold text-gray-700">5.0</span>
            </div>
            <span className="text-gray-800">
              From <span className="font-bold">80+ Reviews</span>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
