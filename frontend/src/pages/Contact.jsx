import { useState } from "react";
import axios from "axios";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be 10 digits";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    console.log("FORM DATA:", formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();

      console.log("RAW RESPONSE:", text);

      let data = {};

      if (text) {
        data = JSON.parse(text);
      }

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSuccessMessage("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      setErrorMessage(error.message || "Something went wrong ");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

          <h1 className="mt-5 text-5xl md:text-6xl font-bold">
            Let’s Start Your Journey
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Reach out to Keen Overseas for expert immigration,
            visa, and study abroad consultation services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-yellow-50">

        {/* Background Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="text-yellow-500 uppercase tracking-wider font-semibold">
              Get In Touch
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900 leading-tight">
              Let’s Discuss Your Future Abroad
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Connect with our immigration experts for professional guidance
              on study visas, PR applications, tourist visas, and global opportunities.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-8">

              {/* Phone */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl shadow-md">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Call Us
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl shadow-md">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Email Us
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@keenoverseas.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl shadow-md">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Visit Office
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Dehradun, Uttarakhand, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-[32px] shadow-2xl p-8 md:p-10">

            <h3 className="text-4xl font-bold text-slate-900">
              Send A Message
            </h3>

            <p className="mt-3 text-slate-600">
              Fill out the form and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* Name */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 resize-none transition"
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {successMessage && (
                <p className="text-green-600 font-medium">
                  {successMessage}
                </p>
              )}

              {errorMessage && (
                <p className="text-red-500 font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-2xl transition duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </section>

    </>
  );
};

export default Contact;