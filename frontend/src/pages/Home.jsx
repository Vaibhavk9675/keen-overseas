import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";

import omnisLogo from "../assets/partener/omnis.svg";
import setiLogo from "../assets/partener/seti.png";
import internapaLogo from "../assets/partener/internapa.jpg";
import stephenLogo from "../assets/partener/stephen.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, } from "swiper/modules";

import "swiper/css/effect-fade";

import "swiper/css";
import "swiper/css/pagination";

import AnimatedCounter from "../components/AnimatedCounter/AnimatedCounter";

// FAQ Section

const faqs = [
  {
    question: "Which countries do you provide study visa services for?",
    answer:
      "We provide expert guidance for Canada, UK, Australia, USA, New Zealand, and several European countries.",
  },
  {
    question: "Do you help with university admissions?",
    answer:
      "Yes, we assist with university selection, application processing, documentation, and admission procedures.",
  },
  {
    question: "Do you provide scholarship guidance?",
    answer:
      "Absolutely. We help students identify and apply for scholarships that match their academic profile.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "The processing time depends on the country and visa type. Our counselors provide estimated timelines during consultation.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes, we offer an initial consultation to understand your goals and guide you through the best options.",
  },
];

// process timeline

const processSteps = [
  {
    icon: <FaUserGraduate />,
    title: "Free Counselling",
    description:
      "Understand your goals and receive expert guidance tailored to your profile.",
  },
  {
    icon: <FaUniversity />,
    title: "University Selection",
    description:
      "Choose the right universities and programs based on your aspirations.",
  },
  {
    icon: <FaFileAlt />,
    title: "Documentation",
    description:
      "Get complete support for SOPs, applications, and required paperwork.",
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    description:
      "Our experts guide you through the entire visa application process.",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Fly Abroad",
    description:
      "Receive pre-departure support and confidently begin your journey.",
  },
];

const partners = [
  {
    logo: omnisLogo,
    name: "International College Omnis",
    country: "Russia",
  },
  {
    logo: setiLogo,
    name: "SETI Institute",
    country: "Singapore",
  },
  {
    logo: internapaLogo,
    name: "Internapa College",
    country: "Cyprus",
  },
  {
    logo: stephenLogo,
    name: "Stephen Business School",
    country: "Mauritius",
  },
];

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

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
      <section className="relative bg-slate-100 overflow-hidden md:min-h-screen md:flex md:items-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-3 pb-12 md:pt-24 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">

          {/* Left Content */}
          <motion.div
            className="order-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
              Trusted Immigration Guidance.
            </span> */}

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Your Gateway To Global Education & Immigration Success.
            </h1>

            <div className="hidden lg:block">
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Keen Overseas provides expert guidance for university admissions, visa assistance, scholarships, and immigration services to help you achieve your international dreams.
              </p>

              {/* <div className="mt-8 grid grid-cols-2 gap-3 text-slate-700">
                <p>✓ Free Counseling</p>
                <p>✓ Visa Assistance</p>
                <p>✓ Scholarship Guidance</p>
                <p>✓ End-to-End Support</p>
              </div> */}

              <div className="mt-8 flex flex-col sm:flex-row gap-5">

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

              <div
                ref={statsRef}
                className="mt-10 grid grid-cols-2 sm:grid-cols-2  gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    <h2 className="text-3xl font-bold text-slate-900">
                      <AnimatedCounter end={500} suffix="+" start={startCounting} />
                    </h2>
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Successful Applications
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    <AnimatedCounter end={14} suffix="+" start={startCounting} />
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Years Experience in Study Visas
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    <AnimatedCounter end={98} suffix="%" start={startCounting} />
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Visa Success Rate
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    <AnimatedCounter end={400} suffix="+" start={startCounting} />
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Students Selected
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            className="relative w-full order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectFade,]}
              effect="fade"
              speed={800}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              className="rounded-3xl shadow-2xl overflow-hidden"
            >
              {[
                {
                  image: hero1,
                  title: "Study at Top Global Universities",
                },
                {
                  image: hero2,
                  title: "Turn Your Global Dreams Into Reality",
                },
                {
                  image: hero3,
                  title: "Personalized Guidance at Every Step",
                },
                {
                  image: hero4,
                  title: "Explore Opportunities Worldwide",
                },
              ].map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className=" w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-end">
                      <div className="p-4 sm:p-6 md:p-8 text-white">
                        <h3
                          className=" text-lg sm:text-2xl md:text-3xl font-bold leading-tight">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* ADD MOBILE CONTENT HERE */}
          <div className="lg:hidden order-3 mt-5">

            <p className="text-lg text-slate-600 leading-relaxed">
              Keen Overseas provides expert guidance for university admissions,
              visa assistance, scholarships, and immigration services to help
              you achieve your international dreams.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-slate-700">
              <p>✓ Free Counseling</p>
              <p>✓ Visa Assistance</p>
              <p>✓ Scholarship Guidance</p>
              <p>✓ End-to-End Support</p>
            </div>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md text-center"
              >
                Get Consultation
              </Link>

              <Link
                to="/services"
                className="border border-slate-300 hover:border-slate-500 text-slate-700 px-6 py-3 rounded-xl transition duration-300 text-center"
              >
                Explore Services
              </Link>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">

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
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  98%
                </h2>

                <p className="text-slate-500 text-sm">
                  Visa Success Rate
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  1000+
                </h2>

                <p className="text-slate-500 text-sm">
                  Students Selected
                </p>
              </div>

            </div>

          </div>

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
      {/* < section className="py-20 bg-slate-100" >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
      {/* <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Trusted Immigration Experts
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We simplify the immigration journey with expert guidance,
              transparent processes, and dedicated support.
            </p>
          </div> */}

      {/* Feature Cards */}
      {/* <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section > */}

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Your Journey With Keen Overseas
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We simplify the entire process so you can focus on your future.
            </p>
          </div>

          <div className="mt-16 relative">

            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-yellow-200 relative overflow-hidden">

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">


              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center relative"
                >

                  <div className="mx-auto w-20 h-20 rounded-full bg-yellow-500 text-white flex items-center justify-center text-3xl shadow-lg relative z-10">
                    <span className="absolute inset-0 rounded-full bg-yellow-500 animate-ping opacity-20"></span>
                    {step.icon}
                  </div>

                  <div className="mt-4">
                    <span className="text-sm font-semibold text-yellow-500">
                      STEP {index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Official Academic Partners */}
      <section className="py-20 bg-slate-50">
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

            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100"
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
                <div className="mt-5 inline-block bg-yellow-100 text-yellow-700 text-sm font-medium px-4 py-2 rounded-full">
                  Official Academic Partner
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600">
              Find answers to the most common questions about studying and immigrating abroad.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-yellow-500">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              to="/contact"
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