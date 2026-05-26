import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import featuresData from "../data/featuresData";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import countriesData from "../data/countriesData";
import CountryCard from "../components/CountryCard/CountryCard";
import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

import heroTravelImg from "../assets/images/hero.webp";

const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="relative bg-slate-100 overflow-hidden min-h-screen flex items-center">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
              Trusted Immigration Guidance
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Start Your Journey To Study & Work Abroad
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Keen Overseas helps students and professionals achieve their global dreams with expert visa consultation, documentation support, and immigration services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md"
              >
                Get Consultation
              </Link>

              <Link
                to="/services"
                className="border border-slate-300 hover:border-slate-500 text-slate-700 px-6 py-3 rounded-xl transition duration-300"
              >
                Explore Services
              </Link>

            </div>

            <div className="mt-10 flex gap-10 flex-wrap">

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  500+
                </h2>
                <p className="text-slate-500 text-sm">
                  Successful Applications
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  14+
                </h2>
                <p className="text-slate-500 text-sm">
                  Years Experience in Study Visas
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  83%
                </h2>
                <p className="text-slate-500 text-sm">
                  Visa Success Rate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <img
              src={heroTravelImg}
              alt="Travel"
              className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-5 py-4">
              <p className="text-sm text-slate-500">
                Countries Available
              </p>

              <h3 className="text-xl font-bold text-slate-900">
                Canada • UK • Australia
              </h3>
            </div>
          </motion.div>
        </div>
      </section >

      {/* Services Section */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Immigration Solutions Designed For You
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We provide complete visa and immigration support for students,
              professionals, and travelers worldwide.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-20 bg-slate-100" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Trusted Immigration Experts
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We simplify the immigration journey with expert guidance,
              transparent processes, and dedicated support.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section >

      {/* Countries Section */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Explore Opportunities Worldwide
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Discover top countries offering world-class education,
              career growth, and immigration opportunities.
            </p>
          </div>

          {/* Country Cards */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countriesData.map((country) => (
              <CountryCard
                key={country.id}
                name={country.name}
                image={country.image}
                description={country.description}
              />
            ))}
          </div>
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="py-20 bg-slate-100" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              What Our Clients Say
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Hear from students and professionals who trusted Keen Overseas
              for their immigration journey.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                country={testimonial.country}
                review={testimonial.review}
              />
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-slate-900 relative overflow-hidden" >

        {/* Background Glow */}
        < div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" ></div >

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">

          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Start Your Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready To Build Your Future Abroad?
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Get expert guidance for study visas, immigration,
            PR applications, and global opportunities with Keen Overseas.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
            to= "/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-lg">
              Book Consultation
            </Link>

            <button className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-2xl transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section >

    </>
  );
};

export default Home;