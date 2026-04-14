import React from "react";
import HeroSection from "../section/Hero/HeroSection";
import FeaturesStrip from "../section/Hero/FeaturesStrip/FeaturesStrip";
import WhyChooseTMS from "../section/WhyChooseTMS/WhyChooseTMS";
import FeatureSpotlight from "../section/FeatureSpotlight/FeatureSpotlight";
import ManageProjectsSection from "../section/ManageProjects/ManageProjectsSection";
import OurPricingPlans from "../section/OurPricingPlans/OurPricingPlans";
import TestimonialsAndFAQ from "../section/TestimonialsAndFAQ/TestimonialsAndFAQ";
import ContactUs from "../section/ContactUs/ContactUs";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <div className="w-full">
      <div id="hero">
        <ScrollReveal animation="fade-in" duration={1000}>
          <HeroSection />
        </ScrollReveal>
      </div>
      <div id="features">
        <ScrollReveal animation="slide-up" delay={100}>
          <FeaturesStrip />
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
          <FeatureSpotlight />
        </ScrollReveal>
      </div>
      <div id="about">
        <ScrollReveal animation="slide-up">
          <WhyChooseTMS />
        </ScrollReveal>
        <ScrollReveal animation="slide-up">
          <ManageProjectsSection />
        </ScrollReveal>
      </div>
      <div id="pricing">
        <ScrollReveal animation="slide-up">
          <OurPricingPlans />
        </ScrollReveal>
      </div>
      <div id="faq">
        <ScrollReveal animation="slide-up">
          <TestimonialsAndFAQ />
        </ScrollReveal>
      </div>
      <div id="contact">
        <ScrollReveal animation="fade-in">
          <ContactUs />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Home;
