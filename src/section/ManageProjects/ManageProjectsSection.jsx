import React from "react";
import { FolderKanban, Zap, Clock, Users2, Target } from "lucide-react";
import manageProjectImg from "../../assets/Manage-project.png";
import ScrollReveal from "../../components/ScrollReveal";

const ManageProjectsSection = () => {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-5 h-5" />,
      title: "Scale test suites across unlimited sprints and releases.",
    },
    {
      id: 2,
      icon: <Clock className="w-5 h-5" />,
      title: "Real-time visibility into QA bottlenecks and execution gaps.",
    },
    {
      id: 3,
      icon: <Users2 className="w-5 h-5" />,
      title: "Cross-team role-based task and cycle assignment.",
    },
    {
      id: 4,
      icon: <Target className="w-5 h-5" />,
      title: "Milestone-driven prioritization with SLA tracking.",
    },
  ];

  return (
    <section className="bg-white py-20" id="about-us">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 p-6 bg-gradient-to-tr from-[#7047eb]/5 to-[#7a5fff]/5 border border-gray-100 rounded-3xl shadow-sm relative lg:order-1 order-2">
            <div className="absolute top-2 left-2 w-24 h-24 rounded-full bg-[#7047eb]/5 blur-lg pointer-events-none" />

            <ScrollReveal animation="fade-in" duration={1200}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-lg border border-gray-200/50">
                <img
                  src={manageProjectImg}
                  alt="Project Management Interface Mockup"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 text-left flex flex-col gap-6 lg:order-2 order-1">
            <ScrollReveal animation="slide-left">
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] mb-2 uppercase tracking-wider w-fit">
                <FolderKanban className="w-4 h-4" /> Manage Your Projects
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                Manage Projects and Your Team Like a Pro
              </h2>

              <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed mb-4">
                Discover the myriad benefits of choosing TMS, from enhanced
                efficiency and improved collaboration to optimized resource
                allocation and real-time insights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <ScrollReveal key={feature.id} animation="slide-up" delay={feature.id * 100}>
                    <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#7047eb]/35 hover:-translate-y-0.5 transition-all duration-300 group h-full cursor-default">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#7a5fff] to-[#4e3be5] text-white rounded-xl shadow-md shadow-[#7047eb]/15 group-hover:scale-105 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <p className="font-semibold text-gray-700 text-sm leading-snug group-hover:text-[#7047eb] transition-colors">
                        {feature.title}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageProjectsSection;
