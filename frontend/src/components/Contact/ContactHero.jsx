import contactData from "../../data/contactData";

const ContactHero = () => {
    return (
        <section className="bg-[#F8FAFC] border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

                {/* Heading */}
                <div className="text-center">

                    <span className="text-[#AB2330] font-semibold uppercase tracking-wider">
                        {contactData.hero.badge}
                    </span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A] leading-tight">
                        {contactData.hero.heading}
                    </h1>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        {contactData.hero.description}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ContactHero;