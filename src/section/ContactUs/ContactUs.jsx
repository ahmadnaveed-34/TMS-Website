import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Clear form fields and errors after a brief delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 text-gray-800 relative overflow-hidden" id="contact">
      {/* Decorative background grid/elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#7047eb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#7a5fff]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info and details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal animation="fade-in">
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] uppercase tracking-wider w-fit">
                <MessageSquare className="w-4 h-4" /> Get In Touch
              </span>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={100}>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 leading-tight">
                Let's Talk About Your Quality Goals
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mt-4 text-base sm:text-lg">
                Have questions about our autonomous agentic testing, enterprise traceability, or flexible plans? Let us know, and our team will get back to you shortly.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <ScrollReveal animation="slide-right" delay={200}>
                <a
                  href="mailto:hello@tms.com"
                  className="flex items-center justify-between border border-gray-100 bg-white rounded-2xl p-5 hover:shadow-lg hover:border-[#7047eb]/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex p-3 bg-[#7047eb]/5 rounded-xl text-[#7047eb] group-hover:bg-[#7047eb]/10 transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Us Directly</p>
                      <p className="font-display font-bold text-gray-900 text-base sm:text-lg">hello@tms.com</p>
                    </div>
                  </div>
                  <span className="inline-flex p-2 bg-gray-50 rounded-xl group-hover:bg-[#7047eb] group-hover:text-white transition-all duration-300">
                    <Send className="w-4 h-4" />
                  </span>
                </a>
              </ScrollReveal>

              {/* Phone Card */}
              <ScrollReveal animation="slide-right" delay={300}>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-between border border-gray-100 bg-white rounded-2xl p-5 hover:shadow-lg hover:border-[#7047eb]/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex p-3 bg-[#7047eb]/5 rounded-xl text-[#7047eb] group-hover:bg-[#7047eb]/10 transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Or call sales</p>
                      <p className="font-display font-bold text-gray-900 text-base sm:text-lg">Book a Demo Call</p>
                    </div>
                  </div>
                  <span className="inline-flex p-2 bg-gray-50 rounded-xl group-hover:bg-[#7047eb] group-hover:text-white transition-all duration-300">
                    <Send className="w-4 h-4" />
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Premium Glassmorphic Form Card */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100/50 relative overflow-hidden">
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-100">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for reaching out. We have received your inquiry and will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-display font-extrabold text-2xl text-gray-900">Send Us a Message</h3>
                      <p className="text-gray-500 mt-1 text-sm sm:text-base">
                        Fill out the form below, and we'll connect you with an expert.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full bg-gray-50/50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-medium ${
                                errors.name 
                                  ? "border-red-500/50 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" 
                                  : formData.name.trim().length > 0
                                    ? "border-green-500/30 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5"
                                    : "border-gray-200 focus:border-[#7047eb] focus:bg-white focus:ring-4 focus:ring-[#7047eb]/10"
                              }`}
                            />
                            {errors.name && (
                              <span className="absolute right-3 top-3.5 text-red-500">
                                <AlertCircle className="w-4 h-4" />
                              </span>
                            )}
                          </div>
                          {errors.name && (
                            <p className="text-red-500 text-xs font-semibold flex items-center gap-1">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Work Email</label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full bg-gray-50/50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-medium ${
                                errors.email 
                                  ? "border-red-500/50 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" 
                                  : formData.email.trim().length > 0 && /\S+@\S+\.\S+/.test(formData.email)
                                    ? "border-green-500/30 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5"
                                    : "border-gray-200 focus:border-[#7047eb] focus:bg-white focus:ring-4 focus:ring-[#7047eb]/10"
                              }`}
                            />
                            {errors.email && (
                              <span className="absolute right-3 top-3.5 text-red-500">
                                <AlertCircle className="w-4 h-4" />
                              </span>
                            )}
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs font-semibold flex items-center gap-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message textarea */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">How can we help?</label>
                        <div className="relative">
                          <textarea
                            name="message"
                            placeholder="Tell us about your project requirements..."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full bg-gray-50/50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-medium resize-none ${
                              errors.message 
                                ? "border-red-500/50 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" 
                                : formData.message.trim().length > 0
                                  ? "border-green-500/30 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5"
                                  : "border-gray-200 focus:border-[#7047eb] focus:bg-white focus:ring-4 focus:ring-[#7047eb]/10"
                            }`}
                          ></textarea>
                          {errors.message && (
                            <span className="absolute right-3 top-3 text-red-500">
                              <AlertCircle className="w-4 h-4" />
                            </span>
                          )}
                        </div>
                        {errors.message && (
                          <p className="text-red-500 text-xs font-semibold flex items-center gap-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#7047eb] to-[#4e3be5] hover:from-[#7a5fff] hover:to-[#7047eb] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md shadow-[#7047eb]/25 hover:shadow-lg hover:shadow-[#7047eb]/35 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
