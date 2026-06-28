import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqData from "../../data/faqData.js";

const FaqSection = () => {
  const [active, setActive] = useState(null);

  const toggleFaq = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-10 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A]">
            Got Questions?
          </h2>

          <p className="mt-4 text-slate-600">
            Find answers to the most common questions about studying abroad,
            visas, admissions, and test preparation.
          </p>

        </div>

        <div className="mt-12 space-y-4">

          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
            >

              <button
                onClick={() => toggleFaq(faq.id)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-6
                  text-left
                "
              >
                <span className="font-semibold text-[#0B2E4A] text-lg">
                  {faq.question}
                </span>

                {active === faq.id ? (
                  <FiMinus className="text-[#AB2330] cursor-pointer" size={22}  />
                ) : (
                  <FiPlus className="text-[#AB2330] cursor-pointer" size={22} />
                )}
              </button>

              {active === faq.id && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FaqSection;