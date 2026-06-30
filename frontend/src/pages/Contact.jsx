import ContactHero from "../components/Contact/ContactHero";
import ContactInfoCards from "../components/Contact/ContactInfoCards";
import OfficeMap from "../components/Contact/OfficeMap";
import ContactCTA from "../components/Contact/ContactCTA";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="relative overflow-hidden py-20 bg-[#FCFBF8] dark:bg-[#0B1220] transition-colors duration-300">

        {/* ================= Background Decorations ================= */}

        {/* World Map */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url('https://www.svgrepo.com/show/530651/world-map.svg')",
          }}
        ></div>

        {/* Top Left Flight */}
        <svg
          className="absolute left-0 top-0 w-72 opacity-30"
          viewBox="0 0 300 200"
        >
          <path
            d="M10 140 C80 10 200 30 290 90"
            stroke="#AB2330"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />

          <text
            x="280"
            y="95"
            fontSize="22"
          >
            ✈
          </text>
        </svg>

        {/* Right Flight */}
        <svg
          className="absolute right-0 top-16 w-72 opacity-20"
          viewBox="0 0 300 250"
        >
          <path
            d="M280 20 C170 40 160 180 20 220"
            stroke="#0B2E4A"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />

          <text
            x="8"
            y="225"
            fontSize="22"
          >
            ✈
          </text>
        </svg>

        {/* Left Bottom Glow */}
        <div className="absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-[#C89B3C]/20 blur-3xl"></div>

        {/* Right Bottom Glow */}
        <div className="absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-[#AB2330]/15 blur-3xl"></div>

        {/* Dot Pattern */}
        <div className="absolute top-10 right-16 grid grid-cols-5 gap-3 opacity-15">

          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"
            />
          ))}

        </div>

        {/* Statue Illustration */}
        <div className="absolute bottom-12 left-6 text-[170px] opacity-[0.07] select-none">
          🗽
        </div>

        {/* Big Ben Illustration */}
        <div className="absolute bottom-0 right-8 text-[180px] opacity-[0.05] select-none">
          🏰
        </div>

        {/* ================= Content ================= */}

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <ContactForm
              title="Book Your FREE Consultation"
              subtitle="Complete the form below and our counselors will contact you shortly."
              showMessage={true}
            />

            <div className="relative flex flex-col justify-center h-full lg:pl-12">

              {/* Heading */}
              <span className="text-[#AB2330] uppercase tracking-[3px] text-sm font-semibold">
                Contact Information
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A] dark:text-white leading-tight">
                We're Here <br />
                To Help You
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8 max-w-md">
                Whether you're planning to study abroad or need visa assistance,
                our experienced counselors are ready to guide you at every step.
              </p>

              {/* Divider */}
              <div className="mt-10 border-t border-slate-200 dark:border-slate-700"></div>

              {/* Address */}
              <div className="mt-8 flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#FFF5F3] flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#AB2330]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>

                </div>

                <div>

                  <h4 className="font-semibold text-[#0B2E4A] dark:text-white">
                    Office Address
                  </h4>

                  <p className="mt-2 text-slate-600 dark:text-slate-300 leading-7">
                    Rajpur Road<br />
                    Dehradun, Uttarakhand
                  </p>

                </div>

              </div>

              {/* Divider */}

              <div className="my-8 border-t border-slate-200 dark:border-slate-700"></div>

              {/* Phone */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#FFF5F3] flex items-center justify-center">

                  📞

                </div>

                <div>

                  <h4 className="font-semibold text-[#0B2E4A] dark:text-white">

                    Call Us

                  </h4>

                  <a
                    href="tel:+9190846 82939"
                    className="mt-2 block text-[#AB2330] font-medium hover:underline"
                  >
                    +91 90846 82939
                  </a>

                </div>

              </div>

              {/* Divider */}

              <div className="my-8 border-t border-slate-200 dark:border-slate-700"></div>

              {/* Email */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#FFF5F3] flex items-center justify-center">

                  ✉️

                </div>

                <div>

                  <h4 className="font-semibold text-[#0B2E4A] dark:text-white">

                    Email Address

                  </h4>

                  <a
                    href="mailto:info@keenoverseas.com"
                    className="mt-2 block text-[#AB2330] hover:underline"
                  >
                    info@keenoverseas.com
                  </a>

                </div>

              </div>

              {/* Divider */}

              <div className="my-8 border-t border-slate-200 dark:border-slate-700"></div>

              {/* Hours */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#FFF5F3] flex items-center justify-center">

                  🕒

                </div>

                <div>

                  <h4 className="font-semibold text-[#0B2E4A] dark:text-white">

                    Office Hours

                  </h4>

                  <p className="mt-2 text-slate-600 dark:text-slate-300">

                    Monday – Saturday

                  </p>

                  <p className="text-slate-600 dark:text-slate-300">

                    9:00 AM – 6:00 PM

                  </p>

                </div>

              </div>

              {/* CTA */}

              <a
                href="https://maps.app.goo.gl/EtNAzLJQLHqNFH6Y8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 w-fit bg-[#AB2330] hover:bg-[#8F1E29] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-[#C89B3C] dark:text-[#0B2E4A] dark:hover:bg-yellow-500"
              >

                Get Directions

                <span>→</span>

              </a>

            </div>

          </div>

        </div>

      </section>


      <OfficeMap />

      <ContactCTA />
    </>
  );
};

export default Contact;