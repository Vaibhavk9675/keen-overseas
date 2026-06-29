import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { FaUserTie, FaShieldAlt, FaClock, FaGlobe } from "react-icons/fa";

const ConsultationSection = () => {
    return (
        <section className="relative overflow-hidden py-20 bg-[#FCFBF8] dark:bg-[#0B1220] transition-colors duration-300">

            {/* ================= Background ================= */}

            {/* Left Gradient */}
            <div className="absolute -left-40 top-10 w-[500px] h-[500px] rounded-full bg-[#F7EBD2] opacity-40 blur-3xl"></div>

            {/* Right Gradient */}
            <div className="absolute -right-40 bottom-0 w-[550px] h-[550px] rounded-full bg-[#F7EBD2] opacity-40 blur-3xl"></div>

            {/* Bottom Wave */}
            <svg
                className="absolute bottom-0 left-0 w-full opacity-20"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#C89B3C"
                    fillOpacity="0.15"
                    d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z"
                />
            </svg>

            {/* Dot Pattern */}

            <div className="absolute top-12 right-20 grid grid-cols-4 gap-3 opacity-20">

                {Array.from({ length: 16 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#0B2E4A]"
                    />
                ))}

            </div>

            {/* Airplane */}

            

            {/* Flight Path */}

            <svg
                className="absolute top-24 left-0 w-[400px] opacity-20"
                viewBox="0 0 400 200"
            >
                <path
                    d="M0 100 C100 0 200 200 380 60"
                    stroke="#0B2E4A"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    fill="none"
                />
            </svg>

            <div className="absolute top-24 left-24 text-4xl opacity-20 rotate-12">
                ✈️
            </div>

            {/* Skyline */}

            <div className="absolute bottom-0 right-0 opacity-[0.08] text-[220px] leading-none select-none">

                🏙️

            </div>

            {/* Globe */}

            <div className="absolute bottom-10 left-0 opacity-[0.06] text-[240px]">

                🌍

            </div>

            {/* ================================================= */}

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <h2 className="mt-6 text-3xl font-bold text-[#0B2E4A] dark:text-white">

                        Book Your

                        <span className="block text-[#C89B3C]">

                            Free Consultation

                        </span>

                    </h2>

                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">

                        Fill in your details and our experts will contact you shortly.

                    </p>

                </div>

                {/* Form */}

                <div className="mt-14 max-w-4xl mx-auto">

                    <ConsultationForm />

                </div>

            </div>

        </section>
    );
};

const Feature = ({ icon, title }) => (
    <div className="flex items-center gap-4 justify-center">

        <div className="w-14 h-14 rounded-full bg-[#FFF4E2] text-[#0B2E4A] flex items-center justify-center text-xl">

            {icon}

        </div>

        <span className="font-medium text-[#0B2E4A] dark:text-white">

            {title}

        </span>

    </div>
);

export default ConsultationSection;