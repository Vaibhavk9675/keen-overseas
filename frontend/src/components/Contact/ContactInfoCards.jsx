import contactData from "../../data/contactData";

const ContactInfoCards = () => {
    return (
        <section className="py-10 bg-[#F8FAFC]">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Heading */}

                <div className="text-center">

                    <span className="text-[#AB2330] font-semibold uppercase tracking-wider">
                        Get In Touch
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-[#0B2E4A]">
                        We're Here To Help
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Reach out to our experienced counselors through any of the
                        following ways. We're always happy to assist you.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 gap-10 py-10">

                    {contactData.contactCards.map((card) => {

                        const Icon = card.icon;

                        return (

                            <div
                                key={card.title}
                                className=" group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2">

                                {/* Icon */}

                                <div
                                    className="
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    bg-[#AB2330]/10
                    flex
                    items-center
                    justify-center
                    text-[#AB2330]
                    text-2xl
                    transition-all
                    duration-300
                    group-hover:bg-[#AB2330]
                    group-hover:text-white
                  "
                                >
                                    <Icon />
                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-bold text-[#0B2E4A]">
                                    {card.title}
                                </h3>

                                {/* Value */}

                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {card.value}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default ContactInfoCards;