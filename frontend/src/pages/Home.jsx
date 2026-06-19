import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaUniversity, FaFileAlt, FaPassport, FaPlaneDeparture, } from "react-icons/fa";

import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import featuresData from "../data/featuresData";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import countriesData from "../data/countriesData";
import CountryCard from "../components/CountryCard/CountryCard";
import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import partnersData from "../data/partnersData";
import coachingData from "../data/coachingData";
import CoachingCard from "../components/CoachingCard/CoachingCard";
import CourseModal from "../components/CourseModal/CourseModal";
import CountryModal from "../components/CountryModal/CountryModal";
import FaqSection from "../components/FaqSection/FaqSection.jsx";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, } from "swiper/modules";

import "swiper/css/effect-fade";

import "swiper/css";
import "swiper/css/pagination";

import AnimatedCounter from "../components/AnimatedCounter/AnimatedCounter";


const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const [showAllCountries, setShowAllCountries] = useState(false);

  const displayedCountries = showAllCountries
    ? countriesData
    : countriesData.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Run only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="h-full w-full"
        >
          {[hero1, hero2, hero3, hero4].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen">

                {/* Background Image */}
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0B2E4A]/70"></div>

                {/* Hero Content */}
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center text-center px-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-4xl">

                    <motion.h1
                      className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Your Gateway To Global Education
                      <br />
                      & Immigration Success
                    </motion.h1>

                    <motion.p
                      className="mt-6 text-lg md:text-xl text-[#E6ECF2] max-w-2xl mx-auto leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Admissions • Student Visas • Scholarships • Immigration Guidance
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                      className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        to="/contact"
                        className="bg-[#AB2330] hover:bg-[#921E29] text-white font-semibold px-8 py-4 rounded-xl shadow-xl transition duration-300"
                      >
                        Book Free Consultation
                      </Link>

                      <Link
                        to="/countries"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#0B2E4A] font-semibold px-8 py-4 rounded-xl transition duration-300"
                      >
                        Explore Destinations
                      </Link>
                    </motion.div>

                  </div>
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      {/* Stats Strip */}
      <section className="bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E4A]">
                <AnimatedCounter end={500} suffix="+" />
              </h2>

              <p className="mt-2 text-black text-sm md:text-base">
                Successful Applications
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E4A]">
                <AnimatedCounter end={14} suffix="+" />
              </h2>

              <p className="mt-2 text-black text-sm md:text-base">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E4A]">
                <AnimatedCounter end={98} suffix="%" />
              </h2>

              <p className="mt-2 text-black text-sm md:text-base">
                Visa Success Rate
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E4A]">
                <AnimatedCounter end={1000} suffix="+" />
              </h2>

              <p className="mt-2 text-black text-sm md:text-base">
                Students Selected
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      < section className="py-10 bg-slate-100" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">

            <span className="text-yellow-500 font-semibold uppercase tracking-wider">
              Why Choose Keen Overseas ?
            </span>


            <h2 className="mt-4 text-4xl font-bold text-black">
              Trusted Immigration Experts
            </h2>

            <p className="mt-4 text-black max-w-2xl mx-auto">
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

      {/* Official Academic Partners */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">
            <span className="text-yellow-500 font-semibold uppercase tracking-wider">
              Trusted Partnerships
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Our Official Academic Partners
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              We proudly collaborate with internationally recognized institutions
              to provide students with world-class education opportunities.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-[#E6ECF2] rounded-3xl p-8 transition-all duration-300  hover:shadow-2xl hover:border-slate-100"
              >

                {/* Logo */}
                <div className="h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 object-contain"
                  />
                </div>

                {/* Institution Name */}
                <h3 className="mt-5 text-lg  font-bold text-slate-900">
                  {partner.name}
                </h3>

                {/* Country */}
                <p className="mt-2 text-slate-500">
                  {partner.country}
                </p>

                {/* Badge */}
                <div className="mt-5 inline-block bg-[#3F5C7A] text-white text-sm font-medium px-4 py-2 rounded-full">
                  Official Academic Partner
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Coaching Data */}
      <section className="py-10 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center">

            <span className="text-yellow-500 font-semibold uppercase tracking-wider">
              Coaching Programs
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A]">
              Prepare for Success
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Achieve your target scores with expert coaching designed to help you study abroad with confidence.
            </p>

          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">


            {coachingData.map((program) => (
              <CoachingCard
                key={program.id}
                icon={program.icon}
                title={program.title}
                description={program.about}
                buttonText="Learn More"
                onLearnMore={() => setSelectedCourse(program)}
              />
            ))}


          </div>

        </div>
      </section>

      {/* Countries Section */}
      < section className="py-10 bg-slate-50" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <div className="text-center">

            <span className="text-yellow-500 font-semibold uppercase tracking-wider">
              Study Destinations
            </span>

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
            {displayedCountries.map((country) => (
              <CountryCard
                key={country.id}
                name={country.name}
                image={country.image}
                description={country.description}
                buttonText="Learn More"
                onLearnMore={() => setSelectedCountry(country)}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllCountries(!showAllCountries)}
            className=" bg-[#AB2330] hover:bg-[#941F2A] inline-flex items-center gap-2 text-white font-semibold cursor-pointer px-8 py-4 rounded-xl transition duration-300">
            {showAllCountries
              ? "Show Less"
              : "Explore More"}
            <FaChevronDown
              className={`transition-transform duration-300 ${showAllCountries ? "rotate-180" : ""
                }`}
            />
          </button>
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="py-10 bg-slate-100" >
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

      {/* FAQ Section */}
      <FaqSection />

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <CountryModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />

    </>
  );
};

export default Home;