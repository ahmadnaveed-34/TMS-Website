import React from "react";
import {
  Users,
  FileSpreadsheet,
  CheckCircle2,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal";
import "./FeaturesStrip.css";

const features = [
  { label: "Easy Collaboration", icon: <Users className="w-5 h-5" /> },
  { label: "Streamlined Reporting", icon: <FileSpreadsheet className="w-5 h-5" /> },
  { label: "Precise Testing", icon: <CheckCircle2 className="w-5 h-5" /> },
  { label: "Advanced Analytics", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Detailed Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Team Management", icon: <ShieldCheck className="w-5 h-5" /> },
  { label: "Test Management", icon: <Layers className="w-5 h-5" /> },
  { label: "Custom Integration", icon: <Cpu className="w-5 h-5" /> },
];

const FeaturesStrip = () => {
  // Multiply features to ensure horizontal coverage for infinite scroll
  const scrollingFeatures = [
    ...features,
    ...features,
    ...features,
    ...features,
  ];

  return (
    <section className="bg-white pt-10 pb-6 relative z-10" id="features-strip">
      <div className="max-w-7xl mx-auto px-4 text-center overflow-hidden relative">
        <ScrollReveal animation="fade-in">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-8">
            Platform Capabilities
          </h2>
        </ScrollReveal>

        {/* Gradient edge masks for infinite scroll fade effect */}
        <div className="absolute left-0 top-[60px] bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-[60px] bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none hidden md:block" />

        <div className="overflow-hidden no-scrollbar pb-6 relative">
          <div className="scroll-container">
            {scrollingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 border border-gray-100 rounded-2xl text-sm font-semibold text-gray-700 bg-white shadow-sm hover:shadow-md hover:border-[#7047eb] hover:text-[#7047eb] transition-all duration-300 cursor-default group whitespace-nowrap"
              >
                <span className="text-gray-400 group-hover:text-[#7047eb] group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
