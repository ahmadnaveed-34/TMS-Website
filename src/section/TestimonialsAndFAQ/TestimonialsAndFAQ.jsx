import React, { useState } from "react";
import { Star, HelpCircle, ChevronDown, Quote } from "lucide-react";
import testimonial1 from "../../assets/testtimonial1.png";
import testimonial2 from "../../assets/testtimonial2.png";
import ScrollReveal from "../../components/ScrollReveal";

const TestimonialsAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Game-changer for project efficiency!",
      text: "TMS's collaborative tools have transformed how we work together, making teamwork effortless and more efficient.",
      name: "John Doe",
      title: "CEO At Zenith",
      image: testimonial1,
    },
    {
      id: 2,
      quote: "Effortless Testing with TMS!",
      text: "TMS's features have been instrumental in achieving our project goals efficiently and proceeding seamlessly.",
      name: "David Lee",
      title: "CEO At Apex",
      image: testimonial2,
    },
    {
      id: 3,
      quote: "Drastically reduced regression time!",
      text: "We integrated TMS into our CI/CD pipeline and cut our regression testing cycle by 60%. The real-time Slack notifications and automated run results keep the whole engineering team in sync.",
      name: "Sarah Jenkins",
      title: "Lead QA Engineer at Finflow",
      image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&size=120&background=7047eb&color=ffffff&bold=true&rounded=true",
    },
    {
      id: 4,
      quote: "Unparalleled visibility into releases!",
      text: "With TMS, I can track release readiness instantly. No more chasing team leads for status updates or digging through spreadsheets. It provides a single source of truth for our entire quality gate.",
      name: "Marcus Vance",
      title: "Director of Engineering at CloudScale",
      image: "https://ui-avatars.com/api/?name=Marcus+Vance&size=120&background=4e3be5&color=ffffff&bold=true&rounded=true",
    },
  ];

  const faqs = [
    {
      question: "What is TMS?",
      answer:
        "TMS (Test Management Suite) is a comprehensive platform designed to streamline your software testing lifecycle, from planning and execution to reporting and analytics.",
    },
    {
      question: "How does TMS improve team productivity?",
      answer:
        "TMS centralizes all testing activities, providing real-time collaboration tools, automated workflows, and clear prioritization, which helps teams focus on high-impact tasks and reduce manual overhead.",
    },
    {
      question: "Does TMS support integration with other tools?",
      answer:
        "Yes, TMS is designed to work seamlessly with popular development and CI/CD tools, ensuring that your testing process is integrated into your existing development ecosystem.",
    },
    {
      question: "Can I customize the reports in TMS?",
      answer:
        "Absolutely! TMS offers flexible reporting options, allowing you to generate detailed insights and dashboards tailored to your project's specific needs and stakeholder requirements.",
    },
    {
      question: "How does pricing scale with team size?",
      answer:
        "TMS offers flexible tiering. Our Pro plan is billed per seat, allowing you to easily scale up as your QA team or developer involvement grows. Volume discounts are available for enterprise organizations with over 50 seats.",
    },
    {
      question: "Is there a self-hosted/on-premise option?",
      answer:
        "Yes, for enterprise teams with strict data residency or compliance requirements, we offer self-hosted deployment options via Docker and Kubernetes. Contact our sales team to discuss on-premise licensing.",
    },
    {
      question: "Does TMS integrate with Jira or Azure DevOps?",
      answer:
        "Absolutely! TMS features native, bidirectional sync with Jira, Azure DevOps, and GitHub Issues. You can link test cases to tickets and create bugs automatically upon execution failure.",
    },
    {
      question: "What is the onboarding process?",
      answer:
        "Getting started takes minutes. You can import existing test suites via CSV or direct integration. We also provide interactive workspace tours and dedicated customer success manager support for team onboarding.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50/50 text-gray-800" id="faq">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal animation="fade-in">
            <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] mb-4 uppercase tracking-wider">
              <Star className="w-4 h-4 fill-[#7047eb]" /> Testimonials
            </span>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 leading-tight">
              What Our Customers Are Saying
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={200}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg">
              Read testimonials from our satisfied customers and learn how TMS has
              transformed their SQA experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {testimonials.map((t) => (
            <ScrollReveal key={t.id} animation="slide-up" delay={t.id * 100}>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                <Quote className="absolute right-6 top-6 w-20 h-20 text-gray-50 opacity-40 group-hover:scale-105 transition-transform duration-300" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-950 mb-3 font-display">
                    &ldquo;{t.quote}&rdquo;
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base mb-6">
                    {t.text}
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-inner"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&size=100&background=7047eb&color=fff`;
                    }}
                  />
                  <div>
                    <h5 className="font-extrabold text-gray-900 text-sm sm:text-base">
                      {t.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-400 font-semibold">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-gray-100">
          <div className="lg:col-span-5 text-left flex flex-col gap-5">
            <ScrollReveal animation="fade-in">
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] uppercase tracking-wider w-fit">
                <HelpCircle className="w-4 h-4" /> FAQs
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-right" delay={100}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mt-3 text-sm sm:text-base">
                Find answers to commonly asked questions about TMS, covering
                features, pricing, integrations, and more, to help you make
                informed decisions for your SQA needs.
              </p>
              <button className="mt-8 bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-white px-7 py-3.5 rounded-xl font-bold shadow-md shadow-[#7047eb]/25 hover:shadow-lg hover:shadow-[#7047eb]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-fit cursor-pointer">
                Start Free Trial
              </button>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 80}>
                <div
                  className={`bg-white border rounded-2xl p-5 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#7047eb]/35 shadow-sm shadow-[#7047eb]/5"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 font-bold text-gray-900 text-left text-sm sm:text-base cursor-pointer"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`p-1.5 rounded-lg transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#7047eb] text-white rotate-180"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  
                  {/* Grid-based smooth height transition */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQ;
