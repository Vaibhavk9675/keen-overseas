import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactCTA = () => {
    return (
        <section className="py-10 bg-[#0B2E4A]">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <span className="text-[#C89B3C] font-semibold uppercase tracking-wider">
                    Need Immediate Assistance?
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white">
                    Let's Talk Today
                </h2>

                <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                    Our experienced counselors are available to answer your
                    questions and guide you through your study abroad journey.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" >
                        <FaWhatsapp className="text-xl" />

                        Chat on WhatsApp

                    </a>

                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="
              inline-flex
              items-center
              justify-center
              gap-3
              bg-[#AB2330]
              hover:bg-[#8E1E29]
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
                    >
                        <FaPhoneAlt />

                        Call Now

                    </a>

                </div>

            </div>

        </section>
    );
};

export default ContactCTA;