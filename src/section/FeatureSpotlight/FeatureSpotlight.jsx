import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Play, Bug, Cpu, Layers, CheckCircle2 } from "lucide-react";
import planningFeature from "../../assets/planningFeature.png";
import executionFeature from "../../assets/executionFeature.png";
import bugLifecycleFeature from "../../assets/bugLifecycleFeature.png";
import reportingFeature from "../../assets/reportingFeature.png";
import ScrollReveal from "../../components/ScrollReveal";

const features = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI-Powered Test Planning",
    description: "Define sprints, generate AI scenarios, and map requirements.",
    details:
      "Manage Agile sprints, organize scenarios, and instantly generate test cases using AI. Link requirements directly to test suites to establish an immutable testing baseline.",
    image: planningFeature,
    slug: "test-planning/test-plans",
  },
  {
    icon: <Play className="w-5 h-5" />,
    title: "Advanced SQA Execution",
    description: "Run manual execution cycles and sanity checklists.",
    details:
      "Execute manual test cycles, log detailed execution results, and perform targeted sanity checks. Track execution status with real-time pass/fail metric dashboards.",
    image: executionFeature,
    slug: "test-execution/cycles",
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "Defect & Bug Lifecycle",
    description: "Log tickets and resolve requirements coverage gaps.",
    details:
      "Automatically convert test execution failures into structured defect tickets. Assign bugs to developers, prioritize issues, and track the entire resolution path from a single matrix.",
    image: bugLifecycleFeature,
    slug: "defect-management",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Autonomous Agentic Testing",
    description: "AI QA crawlers and flaky test case intelligence.",
    details:
      "Deploy autonomous QA agents that crawl your UI and verify workflows. Generate flaky test case reports and analyze error-prone modules to find software quality hot-spots.",
    image: reportingFeature,
    slug: "agentic-testing",
  },
];

export default function FeatureSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const transitionTimerRef = useRef(null);

  const handleTabSelect = (index) => {
    if (index === activeIndex) return;

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }

    setIsTransitioning(true);
    setActiveIndex(index);
    transitionTimerRef.current = setTimeout(() => {
      setDisplayIndex(index);
      setIsTransitioning(false);
      transitionTimerRef.current = null;
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const feature = features[displayIndex];

  return (
    <section className="py-16 bg-white text-gray-800 relative" id="features">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#7047eb]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">

        {/* Header - Centered */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-in">
            <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] mb-4 uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Platform Spotlight
            </span>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Get A Sneak <span className="text-[#7047eb]">Peek</span> of Our
              <br /> Platform Capabilities
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={200}>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
              TMS centralizes your entire SQA lifecycle, connecting requirements, automation, execution cycles, and AI insights.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Column: Interactive Tabs */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            {features.map((f, index) => (
              <button
                key={index}
                className={`p-6 flex items-start gap-4 cursor-pointer text-left rounded-2xl border transition-all duration-300 ${activeIndex === index
                  ? "border-[#7047eb]/30 bg-gradient-to-r from-[#7047eb]/5 to-transparent shadow-sm shadow-[#7047eb]/5"
                  : "border-transparent hover:bg-gray-50"
                  }`}
                onClick={() => handleTabSelect(index)}
              >
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${activeIndex === index
                    ? "bg-[#7047eb] text-white shadow-md shadow-[#7047eb]/20"
                    : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {f.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Preview Frame with Crossfade */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-3 shadow-xl border border-gray-100 transition-all duration-300">

              {/* Browser control header */}
              <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-3 rounded-t-2xl border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="h-5 bg-white border border-gray-200/60 rounded-md text-[9px] text-gray-400 px-6 py-0.5 ml-3 flex items-center justify-center font-semibold">
                  tms-platform.com/dashboard/{feature.slug}
                </div>
              </div>

              {/* Crossfading Image Area */}
              <div
                className={`w-full overflow-hidden bg-gray-50 rounded-b-2xl border-t border-gray-100 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
              >
                <img
                  src={feature.image}
                  alt={`${feature.title} Preview`}
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.005]"
                />
              </div>
            </div>

            {/* Description details card */}
            <div className={`px-4 py-2 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
              <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7047eb]" /> {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.details}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
