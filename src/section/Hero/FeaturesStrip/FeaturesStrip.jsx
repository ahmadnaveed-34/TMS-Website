import React from "react";
import {
  FaUsers,
  FaChartBar,
  FaTachometerAlt,
  FaCogs,
  FaClipboardList,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import ScrollReveal from "../../../components/ScrollReveal";

const features = [
  { label: "Easy Collaboration", icon: <FaUsers /> },
  { label: "Streamlined Reporting", icon: <FaClipboardList /> },
  { label: "Precise Testing", icon: <FiCheckCircle /> },
  { label: "Advanced Analytics", icon: <FaChartBar /> },
  { label: "Detailed Dashboard", icon: <MdDashboardCustomize /> },
  { label: "Team Management", icon: <FaUsers /> },
  { label: "Test Management", icon: <FaTachometerAlt /> },
  { label: "Custom Integration", icon: <FaCogs /> },
];

import "./FeaturesStrip.css";

const FeaturesStrip = () => {
  // Multiply features to ensure horizontal coverage for infinite scroll
  const scrollingFeatures = [
    ...features,
    ...features,
    ...features,
    ...features,
  ];

  return (
    <section className="bg-white pt-8 pb-2 relative z-10" id="features-strip">
      <div className="max-w-7xl mx-auto px-4 text-center overflow-hidden">
        <ScrollReveal animation="fade-in">
          <h2 className="text-md font-medium text-gray-600 mb-8">
            Our Top Notch Features
          </h2>
        </ScrollReveal>

        <div className="overflow-hidden no-scrollbar pb-4 relative">
          <div className="scroll-container">
            {scrollingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white shadow-sm hover:shadow-md hover:border-[#7047EB] hover:text-[#7047EB] transition-all cursor-default group whitespace-nowrap"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
