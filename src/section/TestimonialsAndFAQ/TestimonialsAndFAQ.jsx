import React, { useState } from "react";
import "./TestimonialsAndFAQ.css";
import testimonial1 from "../../assets/testtimonial1.png";
import testimonial2 from "../../assets/testtimonial2.png";

const TestimonialsAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Game-changer for project efficiency!",
      text: "TMS collaborative tools have transformed how we work together, making teamwork effortless and more Efficiently.",
      name: "John Doe",
      title: "CEO At Zenith",
      image: testimonial1,
    },
    {
      id: 2,
      quote: "Effortless Testing with TMS!",
      text: "TMS features have been instrumental in achieving our project goals efficiently and proceeding Seamlessly.",
      name: "David Lee",
      title: "CEO At Apex",
      image: testimonial2,
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
  ];

  return (
    <section className="testimonials-section py-10">
      <div className="testimonials-container w-[95%] md:w-[90%] max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L12.5 7.5L19 8L14.5 12.5L16 19L10 15.5L4 19L5.5 12.5L1 8L7.5 7.5L10 1Z"
                fill="currentColor"
              />
            </svg>
            Our Testimonials
          </div>
          <h2 className="testimonials-title">What Our Customers Are Saying</h2>
          <p className="testimonials-description">
            Read testimonials from our satisfied customers and learn how TMS has
            transformed their TMS experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&size=200&background=4F46E5&color=fff`;
                  }}
                />
              </div>
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C12 17.5 14 14 18 12L16.5 9.5C10.5 12 6 17 6 24C6 28.5 9.5 32 14 32C18.5 32 22 28.5 22 24C22 19.5 18.5 16 14 16C13.5 16 13 16.1 12.5 16.2C12.2 17.7 12 19.3 12 21ZM38 21C38 17.5 40 14 44 12L42.5 9.5C36.5 12 32 17 32 24C32 28.5 35.5 32 40 32C44.5 32 48 28.5 48 24C48 19.5 44.5 16 40 16C39.5 16 39 16.1 38.5 16.2C38.2 17.7 38 19.3 38 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="testimonial-quote">{testimonial.quote}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-grid">
            <div className="faq-info">
              <div className="faq-badge">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 13V13.01M10 10C10 8.5 11.5 8 11.5 6.5C11.5 5.5 10.8 5 10 5C9.2 5 8.5 5.5 8.5 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                FAQ's
              </div>
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-description">
                Find answers to commonly asked questions about TMS, covering
                features, pricing, integrations, and more, to help you make
                informed decisions for your SQA needs.
              </p>
              <button className="faq-cta-btn">Start Free Trial</button>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQ;
