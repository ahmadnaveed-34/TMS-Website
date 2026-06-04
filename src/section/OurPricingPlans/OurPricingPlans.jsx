import React, { useState } from "react";
import { ClipboardList, Bug, Rocket, Users2, Check, X, ShieldCheck, Sparkles } from "lucide-react";
import p1Img from "../../assets/pricingPlan1.png";
import p2Img from "../../assets/pricingPlan2.png";
import ScrollReveal from "../../components/ScrollReveal";

export default function OurPricingPlans() {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [billingPrice, setBillingPrice] = useState(200);

  const featuresFree = [
    { name: "Task Management", included: true },
    { name: "Real-time Collaboration", included: true },
    { name: "Customizable Dashboards", included: false },
    { name: "Advanced Analytics", included: false },
    { name: "Resource Allocation", included: false },
    { name: "Mobile Accessibility", included: false },
  ];

  const featuresPro = [
    { name: "Task Management", included: true },
    { name: "Real-time Collaboration", included: true },
    { name: "Customizable Dashboards", included: true },
    { name: "Advanced Analytics", included: true },
    { name: "Resource Allocation", included: true },
    { name: "Mobile Accessibility", included: true },
  ];

  const pricing = [
    { name: "Storage Allocation", free: "500MB", pro: "5GB" },
    { name: "Planning", free: "50MB/day", pro: "1GB/day" },
    { name: "Client Communication", free: "No", pro: "Yes" },
    { name: "Agile Workflow", free: "Basic", pro: "Premium" },
    { name: "Execution Module", free: "No", pro: "Yes" },
    { name: "Task Management", free: true, pro: true },
    { name: "Bug Life Cycle", free: true, pro: true },
    { name: "Dashboard Analytics", free: true, pro: true },
    { name: "Reporting & PDF Export", free: false, pro: true },
    { name: "Members Accessibility", free: false, pro: true },
    { name: "Resource Allocation", free: false, pro: true },
  ];

  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <span className="p-1 rounded-full bg-[#7047eb]/10 text-[#7047eb]">
            <Check size={16} className="stroke-[3]" />
          </span>
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="p-1 rounded-full bg-gray-100 text-gray-400">
            <X size={16} className="stroke-[3]" />
          </span>
        </div>
      );
    }
    return <span className="text-gray-700 font-semibold">{value}</span>;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/30 text-gray-800 relative overflow-hidden" id="pricing">

      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#7047eb]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#7a5fff]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <ScrollReveal animation="fade-in">
        <div className="text-center max-w-2xl mx-auto px-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] mb-4 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Plans Built For Every SQA Scale
          </h2>
          <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
            Choose the plan that fits your testing scope. Save up to 20% on yearly billing.
          </p>
        </div>
      </ScrollReveal>

      {/* Cycle Toggle Button */}
      <ScrollReveal animation="slide-down" delay={150}>
        <div className="flex justify-center items-center mt-6 mb-16 bg-gray-100 border border-gray-200/50 p-1.5 rounded-2xl w-fit mx-auto shadow-inner">
          <button
            onClick={() => {
              setBillingCycle("monthly");
              setBillingPrice(30);
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${billingCycle === "monthly"
                ? "bg-[#7047eb] text-white shadow-md shadow-[#7047eb]/20"
                : "text-gray-500 hover:text-gray-800"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setBillingCycle("yearly");
              setBillingPrice(200);
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${billingCycle === "yearly"
                ? "bg-[#7047eb] text-white shadow-md shadow-[#7047eb]/20"
                : "text-gray-500 hover:text-gray-800"
              }`}
          >
            Yearly (Save 20%)
          </button>
        </div>
      </ScrollReveal>

      {/* Pricing Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-[95%] md:w-[85%] max-w-5xl mx-auto px-4 items-stretch">

        {/* Free Plan Card */}
        <ScrollReveal animation="slide-up" delay={200}>
          <div className="border border-gray-100 transition-all duration-300 rounded-3xl p-8 flex flex-col h-full bg-white shadow-sm hover:shadow-xl hover:border-gray-200 group">
            <div className="flex justify-between items-start gap-4 mb-6">
              <img
                src={p1Img}
                alt="Free tier icon"
                className="w-20 sm:w-24 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-right">
                <div className="text-4xl font-extrabold text-gray-900">$0</div>
                <div className="text-xs text-gray-400 font-semibold mt-1">
                  Free Forever
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold text-gray-900">Free</h3>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-bold">
                Individuals
              </span>
            </div>

            <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
              Affordable option for small teams seeking essential project and SQA planning tools.
            </p>

            <button className="mt-8 w-full bg-gray-50 border border-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 cursor-pointer">
              Get Started
            </button>

            <h4 className="mt-8 font-bold text-gray-950 text-sm uppercase tracking-wider border-b border-gray-100 pb-3">
              Features Included:
            </h4>

            <ul className="mt-4 space-y-4 text-sm text-gray-700">
              {featuresFree.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-[#7047eb] stroke-[3] shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300 stroke-[3] shrink-0" />
                  )}
                  <span className={feature.included ? "font-semibold text-gray-800" : "text-gray-400 font-medium"}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Pro Plan Card (Featured) */}
        <ScrollReveal animation="slide-up" delay={350}>
          <div className="border-2 border-[#7047eb] transition-all duration-300 rounded-3xl p-8 flex flex-col relative h-full bg-white shadow-xl shadow-[#7047eb]/5 scale-[1.01] hover:scale-[1.02] group">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7047eb]/5 rounded-full blur-xl group-hover:bg-[#7047eb]/10 transition-all" />
            </div>

            {/* Glowing Promo Badge */}
            <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#7047eb] text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-md shadow-[#7047eb]/35 uppercase tracking-wider animate-pulse-subtle">
              Promo Code: FIRST100 (60% Off)
            </span>

            <div className="flex justify-between items-start gap-4 mb-6">
              <img
                src={p2Img}
                alt="Pro tier icon"
                className="w-20 sm:w-24 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-right">
                <div className="text-4xl font-extrabold text-gray-900">
                  ${billingPrice}
                </div>
                <div className="text-xs text-[#7047eb] font-bold mt-1 uppercase tracking-wide">
                  Per {billingCycle}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold text-gray-900">Pro</h3>
              <span className="bg-[#7047eb]/10 text-[#7047eb] text-xs px-2.5 py-1 rounded-full font-bold">
                Enterprises & Startups
              </span>
            </div>

            <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
              Comprehensive QA lifecycle package containing automated execution scripts, logs, and traceability.
            </p>

            <button className="mt-8 w-full bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#7047eb]/25 hover:shadow-xl hover:shadow-[#7047eb]/35 transition-all duration-300 cursor-pointer">
              Get Started Now
            </button>

            <h4 className="mt-8 font-bold text-gray-950 text-sm uppercase tracking-wider border-b border-gray-100 pb-3">
              Features Included:
            </h4>

            <ul className="mt-4 space-y-4 text-sm text-gray-700">
              {featuresPro.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-[#7047eb] stroke-[3] shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300 stroke-[3] shrink-0" />
                  )}
                  <span className={feature.included ? "font-semibold text-gray-800" : "text-gray-400 font-medium"}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Feature Strip summary (All plans include) */}
      <ScrollReveal animation="fade-in" delay={300}>
        <div className="mt-24 pb-4 w-[95%] md:w-[85%] max-w-5xl mx-auto px-4">
          <h3 className="text-center font-display font-bold text-sm text-gray-600  uppercase tracking-widest mb-8">
            All plans include these core modules
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <div className="p-1.5 bg-[#7047eb]/5 rounded-lg text-[#7047eb]">
                <ClipboardList className="w-4 h-4" />
              </div>
              <span className="text-gray-800 font-bold text-sm">Task Planning</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <div className="p-1.5 bg-[#7047eb]/5 rounded-lg text-[#7047eb]">
                <Users2 className="w-4 h-4" />
              </div>
              <span className="text-gray-800 font-bold text-sm">Collaboration</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <div className="p-1.5 bg-[#7047eb]/5 rounded-lg text-[#7047eb]">
                <Bug className="w-4 h-4" />
              </div>
              <span className="text-gray-800 font-bold text-sm">Bug Lifecycle</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <div className="p-1.5 bg-[#7047eb]/5 rounded-lg text-[#7047eb]">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="text-gray-800 font-bold text-sm">Execution Runs</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Plan Matrix comparison table */}
      <ScrollReveal animation="slide-up" delay={200}>
        <div className="mt-24 w-[95%] md:w-[85%] max-w-5xl mx-auto px-4">

          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-xs font-semibold text-[#7047eb] mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Full Feature Matrix
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 font-display">
              Compare Platform Scope
            </h3>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden overflow-x-auto shadow-sm">
            <table className="w-full text-sm min-w-[600px] table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="py-5 px-6 text-left text-sm font-bold text-gray-500 uppercase tracking-wider w-[50%]">
                    Features
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-bold text-gray-500 uppercase tracking-wider w-[25%] font-display">
                    Free
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-bold text-[#7047eb] uppercase tracking-wider w-[25%] font-display">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricing.map((f, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="px-6 py-4.5 font-semibold text-gray-800">
                      {f.name}
                    </td>
                    <td className="py-4.5 px-4 text-center text-gray-500">
                      {renderValue(f.free)}
                    </td>
                    <td className="py-4.5 px-4 text-center text-gray-900">
                      {renderValue(f.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
