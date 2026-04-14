import React, { useState } from "react";
import planningFeature from "../../assets/planningFeature.png";
import executionFeature from "../../assets/executionFeature.png";
import bugLifecycleFeature from "../../assets/bugLifecycleFeature.png";
import reportingFeature from "../../assets/reportingFeature.png";

const features = [
  {
    icon: "✨",
    title: "Planning",
    description: "Ability to review and edit requirements and a scope.",
    details:
      "This module allows users to manage requirements, create AI-powered test plans, and group tasks into sprints.",
    image: planningFeature,
  },
  {
    icon: "🔧",
    title: "Execution",
    description: "Ability to run and record test case execution result.",
    details:
      "The execution module lets testers run manual or automated test cases, record results, and track test coverage in real-time.",
    image: executionFeature,
  },
  {
    icon: "🐛",
    title: "Bug Lifecycle",
    description: "Ability to convert failed test cases to bugs automatically.",
    details:
      "Manage bugs from creation to resolution. Instantly convert failed test cases into bug reports and track them through the entire workflow.",
    image: bugLifecycleFeature,
  },
  {
    icon: "📊",
    title: "Reporting",
    description: "Automated Test and Requirement coverage reports.",
    details:
      "Get real-time insights into project quality with dashboards for test results, defect trends, and team performance—easily exportable to PDF or Excel.",
    image: reportingFeature,
  },
];

import ScrollReveal from "../../components/ScrollReveal";

export default function FeatureSpotlight() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const feature = features[selectedFeature];

  return (
    <section className="pt-6 pb-10 bg-white text-gray-800">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Header Section - Centered */}
        <div className="text-center">
          <ScrollReveal animation="fade-in">
            <p className="inline-block rounded-2xl bg-gray-100 text-sm text-gray-700 font-semibold px-4 py-2 mb-3">
              🚩 Our Features
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get A Sneak <span className="text-[#7047EB]">Peak</span> of Our
              <br /> Features
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={200}>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Our SQA Test Management app offers a comprehensive suite of
              features designed to streamline the entire testing lifecycle.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Section - Left Aligned */}
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          {/* Left column – 35% */}
          <div className="md:basis-[35%] w-full rounded-xl overflow-hidden border border-gray-200">
            {features.map((f, index) => (
              <div
                key={index}
                className={`p-4 py-8 flex items-start gap-4 cursor-pointer transition-all duration-300 border-l-4 ${
                  index !== features.length - 1
                    ? "border-b border-gray-200"
                    : ""
                } ${
                  selectedFeature === index
                    ? "border-l-[#7047EB] hover:border-l-[#4E3BE5] bg-blue-50 hover:bg-blue-100"
                    : "border-l-transparent bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="text-2xl mt-1">{f.icon}</div>
                <div>
                  <h4 className="text-md font-semibold text-gray-900">
                    {f.title}
                  </h4>
                  <p className="text-sm text-gray-500">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column – 65% */}
          <div className="md:basis-[65%] w-full bg-white rounded-xl p-6 shadow border border-gray-200 transition-all duration-300">
            <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
            <p className="text-gray-600 mb-4">{feature.details}</p>
            <div className="w-full overflow-hidden border border-blue-600 rounded-xl bg-gray-50">
              <ScrollReveal
                key={selectedFeature}
                animation="fade-in"
                duration={500}
              >
                <img
                  src={feature.image}
                  alt={`${feature.title} preview`}
                  className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
