import consultationData from "../../data/consultationData";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import ConsultationForm from "../ConsultationForm/ConsultationForm";

const ConsultationSection = () => {
    return (
        <section className="py-10 bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <section className="bg-[#F8FAFC] dark:bg-[#0B1220] transition-colors duration-300">

                    <div className="max-w-3xl mx-auto px-3">

                        <div className="text-center">

                        </div>

                        <div>

                            <ConsultationForm />

                        </div>

                    </div>

                </section>

            </div>

        </section>
    );
};

export default ConsultationSection;