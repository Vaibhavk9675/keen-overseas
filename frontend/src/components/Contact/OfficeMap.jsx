import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaDirections,
} from "react-icons/fa";

const OfficeMap = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Heading */}

                <div className="text-center">

                    <span className="text-[#AB2330] uppercase tracking-wider font-semibold">
                        Visit Our Office
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A]">
                        Let's Meet In Person
                    </h2>

                    <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
                        Prefer face-to-face guidance? Visit our office and speak directly
                        with our experienced counselors.
                    </p>

                </div>

                {/* Main Section */}

                <div className="mt-16 grid lg:grid-cols-5 gap-10 items-stretch">

                    {/* Google Map */}

                    <div className="lg:col-span-3">

                        <div className="overflow-hidden rounded-[32px] shadow-xl border border-slate-200 h-full">

                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5363590291327!2d78.05156387458248!3d30.335703104713932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32b9a3bd1eb%3A0x1ff93843dd57d1a1!2sKeen%20Overseas%20Education%20and%20Immigration%20Consultants!5e0!3m2!1sen!2sin!4v1782503251190!5m2!1sen!2sin"
                                width="100%"
                                height="500"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0 w-full h-full min-h-[500px]"
                            />

                        </div>

                    </div>

                    {/* Office Information */}

                    <div className="lg:col-span-2">

                        <div className="bg-[#F8FAFC] border border-slate-200 rounded-[32px] p-10 shadow-xl h-full flex flex-col">

                            <h3 className="text-3xl font-bold text-[#0B2E4A]">
                                Keen Overseas
                            </h3>

                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Visit our office for personalized counseling and expert
                                guidance regarding study abroad, visas, and admissions.
                            </p>

                            <div className="mt-10 space-y-8">

                                {/* Address */}

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-[#AB2330]/10 flex items-center justify-center text-[#AB2330] text-xl">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-[#0B2E4A]">
                                            Office Address
                                        </h4>

                                        <p className="text-slate-600 mt-1">
                                           Second Floor, Raj Plaza, 207,<br /> Dilaram Chowk, Rajpur Rd,<br />Dehradun, Uttarakhand 248001
                                        </p>

                                    </div>

                                </div>

                                {/* Phone */}

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-[#AB2330]/10 flex items-center justify-center text-[#AB2330] text-xl">
                                        <FaPhoneAlt />
                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-[#0B2E4A]">
                                            Phone
                                        </h4>

                                        <a
                                            href="tel:+91XXXXXXXXXX"
                                            className="text-slate-600 hover:text-[#AB2330]"
                                        >
                                            +91 XXXXX XXXXX
                                        </a>

                                    </div>

                                </div>

                                {/* Email */}

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-[#AB2330]/10 flex items-center justify-center text-[#AB2330] text-xl">
                                        <FaEnvelope />
                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-[#0B2E4A]">
                                            Email
                                        </h4>

                                        <a
                                            href="mailto:info@keenoverseas.com"
                                            className="text-slate-600 hover:text-[#AB2330]"
                                        >
                                            info@keenoverseas.com
                                        </a>

                                    </div>

                                </div>

                                {/* Hours */}

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-[#AB2330]/10 flex items-center justify-center text-[#AB2330] text-xl">
                                        <FaClock />
                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-[#0B2E4A]">
                                            Office Hours
                                        </h4>

                                        <p className="text-slate-600">
                                            Monday – Saturday
                                            <br />
                                            9:00 AM – 6:00 PM
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Button */}

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className=" mt-10 inline-flex justify-center items-center gap-3 bg-[#AB2330] hover:bg-[#8F1C28] text-white font-semibold rounded-2xl px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <FaDirections />

                                Get Directions

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OfficeMap;