import servicesPageData from "../data/servicesPageData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaUserTie,
  FaGlobe,
  FaPassport,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

          <div className="text-center">

            <span className="text-[#AB2330] font-semibold uppercase tracking-wider">
              Our Services
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A]">
              Everything You Need For Your Abroad Journey
            </h1>

            <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
              From university selection and admissions to student visas
              and IELTS/PTE coaching, we provide complete support at
              every stage of your international education journey.
            </p>

          </div>

        </div>
      </section>
      {/* Services Section */}
      <section className="py-10 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {servicesPageData.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    transition
                    duration-300
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#C89B3C]/10
                      text-[#C89B3C]
                      flex
                      items-center
                      justify-center
                      text-3xl
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#0B2E4A]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center">

            <span className="text-[#C89B3C] uppercase tracking-wider font-semibold">
              Our Process
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A]">
              How It Works
            </h2>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">

            {[
              "Free Consultation",
              "University Selection",
              "Application Submission",
              "Visa Processing",
              "Start Your Journey",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >

                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    bg-[#AB2330]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-xl
                  "
                >
                  {index + 1}
                </div>

                <h3 className="mt-4 font-semibold text-[#0B2E4A]">
                  {step}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0B2E4A]">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center">

            <span className="text-[#C89B3C] uppercase tracking-wider font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Why Students Choose Keen Overseas
            </h2>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: FaUserTie,
                title: "Expert Counselors",
              },

              {
                icon: FaGlobe,
                title: "Trusted Partners",
              },

              {
                icon: FaPassport,
                title: "Visa Guidance",
              },

              {
                icon: FaHeadset,
                title: "End-to-End Support",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white/10
                    backdrop-blur-lg
                    rounded-3xl
                    p-8
                    border
                    border-white/10
                  "
                >

                  <Icon className="text-[#C89B3C] text-4xl" />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F6F8FB]">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-[#0B2E4A]">
            Ready to Start Your Global Journey?
          </h2>

          <p className="mt-5 text-slate-600">
            Book a free consultation and let our experts
            help you achieve your study abroad goals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/contact"
              className="
                bg-[#AB2330]
                hover:bg-[#941F2A]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >
              Book Free Consultation
            </Link>

            <a
              href="https://wa.me/916398610995"
              target="_blank"
              rel="noreferrer"
              className="
                border-2
                border-[#0B2E4A]
                text-[#0B2E4A]
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-[#0B2E4A]
                hover:text-white
                transition
              "
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>
    </>
  );
};

export default Services;