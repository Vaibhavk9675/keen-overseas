
import { useState } from "react";
import consultationData from "../../data/consultationData";

const ContactForm = ({
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
        <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-[#C89B3C]/20 via-transparent to-[#AB2330]/15 blur-3xl"></div>

            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/60 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl shadow-[0_30px_60px_rgba(15,23,42,.15)] dark:shadow-black/40 transition-all duration-300">

                {/* Decorative Background */}

                <div className="absolute inset-0 pointer-events-none">

                    {/* Dot Pattern */}

                    <div className="absolute right-10 top-10 grid grid-cols-6 gap-3 opacity-[0.08]">

                        {Array.from({ length: 36 }).map((_, i) => (
                            <span
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#0B2E4A] dark:bg-white"
                            />
                        ))}

                    </div>

                    {/* Top Right Gold Blob */}

                    <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#C89B3C]/8 blur-xl"></div>

                    {/* Bottom Left Blue Blob */}

                    <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0B2E4A]/3 dark:bg-[#C89B3C]/5 blur-xl"></div>

                    {/* Small Red Accent */}

                    <div className="absolute top-1/2 -right-10 h-32 w-32 rounded-full bg-[#AB2330]/5 blur-xl"></div>

                </div>

                <div className="relative z-10 p-8">

                    <h3 className="text-3xl font-bold text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="mt-3 text-slate-300 leading-relaxed">
                        {subtitle}
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >

                        <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                            Full Name *
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40"
                        />

                        <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                            Mobile Number *
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40"
                        />

                        <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                            Email Address *
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40"
                        />

                        <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                            Interested Country
                        </label>

                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40"
                        >
                            <option value="">Interested Country</option>

                            {consultationData.countries.map((country) => (
                                <option
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </option>
                            ))}

                        </select>

                        <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                            Preferred Intake
                        </label>

                        <select
                            name="intake"
                            value={formData.intake}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40"
                        >
                            <option value="">Preferred Intake</option>

                            {consultationData.intakes.map((intake) => (
                                <option
                                    key={intake}
                                    value={intake}
                                >
                                    {intake}
                                </option>
                            ))}

                        </select>

                        {showMessage && (
                            <div>

                                <label className="block mb-2 text-[15px] font-semibold tracking-wide text-[#0B2E4A] dark:text-slate-200 transition-colors duration-300">
                                    Additional Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your study plans..."
                                    className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-5 py-3 text-[#0B2E4A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/20 focus:shadow-lg focus:shadow-[#C89B3C]/10 hover:border-[#C89B3C]/40" />

                            </div>
                        )}

                        <button
                            type="submit"
                            className="group relative cursor-pointer overflow-hidden w-full bg-gradient-to-r from-[#AB2330] to-[#C43846] dark:from-[#C89B3C] dark:to-[#D6AF56] text-white dark:text-[#0B2E4A] py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#AB2330]/20 active:scale-[0.98]"
                        >
                            <>
                                <span className="relative z-10">
                                    {consultationData.buttonText}
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
                            </>
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
            </div>
        </div>
    );
};

export default ContactForm;