import React from "react";
import InviteSection from "../../assets/InvitePeople.png";
import arrow from "../../assets/arrow.png";
import bloom from "../../assets/bloom.png";
import people from "../../assets/peoples-two.png";
import graphic from "../../assets/graphic-stitching.png";
import ScrollReveal from "../../components/ScrollReveal";

const WhyChooseTMS = () => {
  return (
    <section className="bg-white py-10" id="why-choose-us">
      <div className="flex flex-col md:flex-row items-center w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-start mb-10 md:mb-0 px-4 md:px-0">
          <ScrollReveal animation="slide-right">
            <span className="badge py-2 px-3 bg-gray-50 gap-2 inline-flex rounded-2xl mb-4 border border-gray-200">
              <img src={arrow} alt="arrow" />
              Why Choose Us?
            </span>

            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
              Why Choose Test <br />
              Management Suite?
            </h2>

            <p className="text-base sm:text-lg text-gray-500 font-medium mb-4">
              Sign up for our free trial to experience TMS's powerful test
              management features firsthand and transform the way you work.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <ScrollReveal animation="slide-up" delay={100}>
                <span className="badge py-2 px-4 w-max border border-gray-200 rounded-2xl gap-2 inline-flex text-[14px] sm:text-[16px] text-gray-800 font-[500]">
                  <img src={bloom} alt="arrow" />
                  Ability to add requirement individually
                </span>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={200}>
                <span className="badge py-2 px-4 w-max border border-gray-200 rounded-2xl gap-2 inline-flex text-[14px] sm:text-[16px] text-gray-800 font-[500]">
                  <img src={people} alt="arrow" />
                  Automated QA KPIs
                </span>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={300}>
                <span className="badge py-2 px-4 w-max border border-gray-200 rounded-2xl gap-2 inline-flex text-[14px] sm:text-[16px] text-gray-800 font-[500]">
                  <img src={graphic} alt="arrow" />
                  Ability to record test case execution result
                </span>
              </ScrollReveal>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-[16px] bg-gradient-to-b from-[#575757] to-[#7047EB] rounded-xl px-6 py-4 font-[500] text-white transition duration-300 ease-in-out hover:bg-white cursor-pointer">
                Start Free Trial
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const yOffset = -50;
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="text-[16px] bg-gray-100 rounded-xl hover:bg-gray-200 border border-gray-200 font-[500] px-6 py-4 transition duration-300 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[48%] px-4 md:px-6 bg-blue-50 border border-[#7A5FFF] rounded-2xl">
          <ScrollReveal animation="fade-in" duration={1200}>
            <img src={InviteSection} alt="invite" className="w-full h-auto" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTMS;
