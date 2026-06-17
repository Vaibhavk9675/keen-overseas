import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const CountryModal = ({ country, onClose }) => {
  return (
    <AnimatePresence>
      {country && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="
              relative
              bg-white
              rounded-3xl
              w-full
              max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              scrollbar-hide
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B2E4A] to-[#163A59] px-8 py-6">

              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Study in {country.name}
                  </h2>

                  <p className="text-white/80 mt-2">
                    Explore global education opportunities
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className=" w-12 h-12 rounded-full flex items-center justify-center text-white cursor-ponter hover:bg-white/10 transition">
                  <HiX size={28} />
                </button>

              </div>

            </div>

            {/* Body */}
            <div className="p-8 space-y-10">

              {/* Why */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Why Study Here?
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {country.why}
                </p>
              </section>

              {/* Courses */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Popular Courses
                </h3>

                <div className="flex flex-wrap gap-3">

                  {country.courses?.map((course, index) => (
                    <span
                      key={index}
                      className="
                        bg-[#F6F8FB]
                        px-4
                        py-2
                        rounded-full
                        text-slate-700
                        font-medium
                      "
                    >
                      {course}
                    </span>
                  ))}

                </div>
              </section>

              {/* Intakes */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Major Intakes
                </h3>

                <div className="grid sm:grid-cols-3 gap-4">

                  {country.intakes?.map((intake, index) => (
                    <div
                      key={index}
                      className="
                        bg-[#F6F8FB]
                        rounded-2xl
                        p-4
                        text-center
                        font-medium
                        text-slate-700
                      "
                    >
                      {intake}
                    </div>
                  ))}

                </div>
              </section>

              {/* Work Opportunities */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Work Opportunities
                </h3>

                <div className="space-y-3">

                  {country.work?.map((item, index) => (
                    <div
                      key={index}
                      className="
                        bg-[#F6F8FB]
                        rounded-2xl
                        p-4
                        text-slate-700
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>
              </section>

              {/* Universities */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Top Universities
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  {country.universities?.map((university, index) => (
                    <div
                      key={index}
                      className=" bg-[#FFF3D6] rounded-2xl p-4 font-medium text-slate-800">
                      🏛 {university}
                    </div>
                  ))}

                </div>
              </section>

              {/* Cities */}
              <section>
                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                  Popular Cities
                </h3>

                <div className="flex flex-wrap gap-3">

                  {country.cities?.map((city, index) => (
                    <span
                      key={index}
                      className=" bg-[#AB2330]/10 text-[#AB2330] px-4 py-2 rounded-full font-medium">
                      {city}
                    </span>
                  ))}

                </div>
              </section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  className=" flex-1 bg-[#AB2330] cursor-pointer hover:bg-[#941F2A] text-white font-semibold py-4 rounded-xl transition">
                  Book Free Consultation
                </button>

                <a
                  href={`https://wa.me/916398610995?text=Hello Keen Overseas, I would like to study in ${country.name}.`}
                  target="_blank"
                  rel="noreferrer"
                  className=" flex-1 border-2 border-[#0B2E4A] text-[#0B2E4A] hover:bg-[#0B2E4A] hover:text-white text-center font-semibold py-4 rounded-xl transition">
                  WhatsApp Us
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default CountryModal;