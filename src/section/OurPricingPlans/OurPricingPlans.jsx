import React, { useState } from "react";
import {
  CheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  ClipboardIcon,
  BugAntIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Check, X } from "lucide-react";

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
    { name: "Resource Allocation", included: false },
    { name: "Mobile Accessibility", included: false },
  ];

  const pricing = [
    { name: "Storage Allocation", free: "500MB", pro: "5GB" },
    { name: "Planning", free: "50MB/day", pro: "1GB/day" },
    { name: "Client Communication", free: "-", pro: "yes" },
    { name: "Agile Workflow", free: "-", pro: "Premium" },
    { name: "Execution", free: "-", pro: "yes" },
    { name: "Task Management", free: true, pro: true },
    { name: "Bug Life Cycle", free: true, pro: true },
    { name: "Dashboard Analytics", free: true, pro: true },
    { name: "Reporting", free: false, pro: true },
    { name: "Members Accessibility", free: false, pro: true },
    { name: "Resource Allocation", free: false, pro: false },
  ];

  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check
          className="bg-[#7A5FFF] text-white rounded-md mx-auto"
          size={20}
        />
      ) : (
        <X className="text-gray-500 mx-auto bg-gray-100 rounded-md" size={20} />
      );
    }
    return <span className="text-gray-600 mx-auto font-medium">{value}</span>;
  };

  return (
    <section className="py-10 bg-white text-gray-800">
      {/* Header */}
      <ScrollReveal animation="fade-in">
        <div className="text-center max-w-2xl mx-auto px-4">
          <span className="inline-block px-4 py-1 mb-3 text-sm font-medium bg-gray-100 rounded-full">
            💎 Our Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="mt-2 text-gray-500 font-[500] text-sm sm:text-base">
            Discover both our budget-friendly and premium plans. Two transparent
            billing options — monthly or yearly.
          </p>
        </div>
      </ScrollReveal>

      {/* Toggle */}
      <ScrollReveal animation="slide-down" delay={200}>
        <div className="flex justify-center items-center mt-6 border border-gray-200 rounded-md overflow-hidden w-fit mx-auto">
          <button
            onClick={() => {
              setBillingCycle("monthly");
              setBillingPrice(30);
            }}
            className={`px-4 sm:px-6 py-2 text-sm font-medium border-r border-gray-200 transition-colors duration-200 ${
              billingCycle === "monthly"
                ? "bg-[#7A5FFF] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setBillingCycle("yearly");
              setBillingPrice(200);
            }}
            className={`px-4 sm:px-6 py-2 text-sm font-medium transition-colors duration-200 ${
              billingCycle === "yearly"
                ? "bg-[#7A5FFF] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Yearly
          </button>
        </div>
      </ScrollReveal>

      {/* Plans */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Free Plan */}
        <ScrollReveal animation="slide-up" delay={300}>
          <div
            className={`border transition-all duration-500 rounded-2xl p-6 flex flex-col h-full ${
              billingCycle === "monthly"
                ? "border-[#7A5FFF] shadow-[0_0_20px_rgba(122,95,255,0.15)] bg-white ring-2 ring-[#7A5FFF]/20 scale-[1.02]"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <img
                src={p1Img}
                alt="image"
                className="w-24 sm:w-32 mx-auto sm:mx-0"
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-right">
                $0{" "}
                <span className="text-base text-gray-500 font-normal">
                  / Per {billingCycle}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Free
              </h3>
              <span className="bg-[#7A5FFF] text-white text-xs px-2 py-1.5 rounded-full">
                For Individuals
              </span>
            </div>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Affordable option for small teams seeking essential project
              management.
            </p>

            <button className="mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Get Started →
            </button>

            <h4 className="mt-6 font-semibold text-gray-900">
              Features Included:
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {featuresFree.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-b-gray-100 pb-3"
                >
                  <div className="flex items-center gap-2">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-white bg-[#7A5FFF] rounded-md p-0.5" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-gray-600 bg-gray-100 rounded-md p-0.5" />
                    )}
                    {feature.name}
                  </div>
                  <InformationCircleIcon className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Pro Plan */}
        <ScrollReveal animation="slide-up" delay={400}>
          <div
            className={`border transition-all duration-500 rounded-2xl p-6 flex flex-col relative h-full ${
              billingCycle === "yearly"
                ? "border-[#7A5FFF] shadow-[0_0_25px_rgba(122,95,255,0.2)] bg-white ring-2 ring-[#7A5FFF]/20 scale-[1.02]"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#7A5FFF] text-white text-xs px-3 py-1 rounded-full">
              Use "FIRST100" code for 60% Discount
            </span>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <img
                src={p2Img}
                alt="image"
                className="w-24 sm:w-32 mx-auto sm:mx-0"
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-right">
                ${billingPrice}{" "}
                <span className="text-base text-gray-500 font-normal">
                  / Per {billingCycle}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Pro
              </h3>
              <span className="bg-[#7A5FFF] text-white text-xs sm:text-sm px-2 py-1.5 rounded-full">
                For Startups & Enterprises
              </span>
            </div>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Comprehensive package tailored for growing businesses.
            </p>

            <button className="mt-8 w-full bg-gradient-to-r from-[#7A5FFF] to-[#4E3BE5] hover:from-[#6e56e7] hover:to-[#4735ce] text-white py-2 rounded-md font-medium  transition hover:cursor-pointer">
              Get Started →
            </button>

            <h4 className="mt-6 font-semibold text-gray-900">
              Features Included:
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {featuresPro.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-b-gray-100 pb-3"
                >
                  <div className="flex items-center gap-2">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-white bg-[#7A5FFF] rounded-md p-0.5" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-gray-600 bg-gray-100 rounded-md p-0.5" />
                    )}
                    {feature.name}
                  </div>
                  <InformationCircleIcon className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* All Plans Include Strip */}
      <ScrollReveal animation="fade-in" delay={300}>
        <div className="mt-14 pb-4 w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-700 font-medium mb-8">
            All Plans Include
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F9FAFB] border border-[#F3F4F6] rounded-2xl transition-all hover:shadow-md">
              <ClipboardIcon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-semibold text-sm">
                Task Management
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F9FAFB] border border-[#F3F4F6] rounded-2xl transition-all hover:shadow-md">
              <UserGroupIcon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-semibold text-sm">
                Real-time Collaboration
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F9FAFB] border border-[#F3F4F6] rounded-2xl transition-all hover:shadow-md">
              <BugAntIcon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-semibold text-sm">
                Bug Module
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F9FAFB] border border-[#F3F4F6] rounded-2xl transition-all hover:shadow-md">
              <RocketLaunchIcon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-semibold text-sm">
                Test Execution Module
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Pricing Comparison */}
      <ScrollReveal animation="slide-up" delay={200}>
        <div className="mt-12 w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 text-center mb-6">
            Pricing Comparison
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[600px] table-fixed">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-[15px] sm:text-[16px] text-gray-800 font-bold">
                    Top Features
                  </th>
                  <th className="py-4 px-4 text-center text-[15px] sm:text-[16px] text-gray-800 font-bold">
                    Free
                  </th>
                  <th className="py-4 px-4 text-center text-[15px] sm:text-[16px] text-gray-800 font-bold">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((f, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-200 even:bg-gray-50"
                  >
                    <td className="px-6 text-gray-600 py-4 font-medium">
                      {f.name}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderValue(f.free)}
                    </td>
                    <td className="py-4 px-4 text-center">
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
