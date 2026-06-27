import consultationData from "../../data/consultationData";
import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const ConsultationSection = () => {
    return (
        <section className="py-10 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <section className="py-10 bg-[#F8FAFC]">

                    <div className="max-w-3xl mx-auto px-6">

                        <div className="text-center">

                            <span className="text-yellow-500 font-semibold uppercase tracking-wider">
                                Free Consultation
                            </span>

                        </div>

                        <div className="mt-12">

                            <ConsultationForm />

                        </div>

                    </div>

                </section>

            </div>

        </section>
    );
};

export default ConsultationSection;