import { useState } from "react";
import consultationData from "../../data/consultationData";

const ConsultationForm = ({
    title = "Book Your FREE Consultation",
    subtitle = "Complete the form below and our counselors will get in touch with you shortly.",
    showMessage = false,
}) => {

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        country: "",
        intake: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Form Submitted Successfully!");
    };

    return (
        <div className="bg-white rounded-4xl shadow-xl p-8">

            <h3 className="text-3xl font-bold text-[#0B2E4A]">
                {title}
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
                {subtitle}
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
            >

                <label className="block mb-2 font-medium text-[#0B2E4A]">
                    Full Name *
                </label>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none focus:border-[#AB2330]"
                />

                <label className="block mb-2 font-medium text-[#0B2E4A]">
                    Mobile Number *
                </label>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none focus:border-[#AB2330]"
                />

                <label className="block mb-2 font-medium text-[#0B2E4A]">
                    Email Address *
                </label>

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none focus:border-[#AB2330]"
                />

                <button
                    type="submit"
                    className="w-full bg-[#AB2330] hover:bg-[#92202A] text-white py-5 mb-2 cursor-pointer rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                    {consultationData.buttonText}
                </button>

                <div className="mt-1 text-center">

                    <p className="text-sm text-slate-500">
                        🔒 Your information is completely secure.
                    </p>

                    {/* <div className="mt-3 flex justify-center items-center gap-2">

                        <span className="text-[#C89B3C] text-lg">
                            ★★★★★
                        </span>

                        <span className="text-sm text-slate-600">
                            Trusted by 1000+ Students
                        </span>

                    </div> */}

                </div>

            </form>

        </div>
    );
};

export default ConsultationForm;