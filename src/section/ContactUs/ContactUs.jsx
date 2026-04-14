import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { TbPhoneRinging } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form logic here
    console.log("Form submitted:", formData);

    // ✅ Clear form fields and errors
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="bg-white py-10">
      <div className="flex flex-col md:flex-row gap-12 w-[95%] md:w-[90%] max-w-7xl mx-auto px-4">
        {/* Left: Contact Form */}
        <div className="bg-white shadow-sm rounded-2xl p-6 w-full md:w-1/2 border border-gray-100">
          <h2 className="text-lg font-semibold">Send Us a Message</h2>
          <p className="text-sm text-gray-500 mt-1">
            Use our convenient contact form to reach out with questions,
            feedback, or collaboration inquiries.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A5FFF] font-medium`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A5FFF] font-medium`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-gray-50 border ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A5FFF] font-medium`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7A5FFF] to-[#4E3BE5] hover:from-[#6e56e7] hover:to-[#4735ce] text-white font-medium py-2 px-4 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-2 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
            <TbPhoneRinging size={20} />
            Contact Us
          </span>
          <h2 className="text-4xl font-semibold mt-4">Get in Touch with Us</h2>
          <p className="text-gray-500 mt-2">
            Reach out to us for inquiries, support, or partnership
            opportunities. We're here to assist you!
          </p>

          <div className="mt-6 space-y-4">
            {/* Email */}
            <a
              href="mailto:hello@tms.com"
              className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md hover:border-gray-400 transition group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block p-3 bg-gray-100 rounded-md">
                  <Mail className="w-6 h-6 text-gray-700" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">You can email us here</p>
                  <p className="font-medium">hello@tms.com</p>
                </div>
              </div>
              <span className="inline-block p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition">
                <FiArrowUpRight className="text-black w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md hover:border-gray-400 transition group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block p-3 bg-gray-100 rounded-md">
                  <Phone className="w-6 h-6 text-gray-700" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Or give us a call</p>
                  <p className="font-medium">Book a Call</p>
                </div>
              </div>
              <span className="inline-block p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition">
                <FiArrowUpRight className="text-black w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
