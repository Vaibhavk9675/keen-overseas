const sections = [
    {
        title: "1. Acceptance of Terms",
        content:
            "By accessing or using the Keen Overseas website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
    },
    {
        title: "2. Services",
        content:
            "Keen Overseas provides education consultancy, study abroad guidance, visa assistance, documentation support, and related advisory services. Final decisions regarding admissions, visas, or immigration remain solely with the respective universities and government authorities.",
    },
    {
        title: "3. User Responsibilities",
        content:
            "Users are responsible for providing accurate and complete information. Submission of false or misleading information may affect the services provided and any resulting applications.",
    },
    {
        title: "4. Intellectual Property",
        content:
            "All website content, including text, graphics, logos, images, and other materials, is the property of Keen Overseas unless otherwise stated. Unauthorized reproduction or distribution is prohibited.",
    },
    {
        title: "5. Limitation of Liability",
        content:
            "Keen Overseas strives to provide accurate guidance but does not guarantee admission, visa approval, scholarships, or immigration outcomes. We are not liable for decisions made by educational institutions, embassies, or government authorities.",
    },
    {
        title: "6. Third-Party Websites",
        content:
            "Our website may contain links to third-party websites for your convenience. Keen Overseas is not responsible for the content, policies, or practices of those external websites.",
    },
    {
        title: "7. Changes to Terms",
        content:
            "We reserve the right to modify these Terms & Conditions at any time. Updated versions will be published on this page with the revised date.",
    },
    {
        title: "8. Governing Law",
        content:
            "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts.",
    },
    {
        title: "9. Contact Us",
        content:
            "For any questions regarding these Terms & Conditions, please contact Keen Overseas through our Contact page.",
    },
];

const TermsConditions = () => {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#F8FAFC] border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-center">

                    <span className="text-[#AB2330] uppercase tracking-wider font-semibold">
                        Legal
                    </span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A]">
                        Terms & Conditions
                    </h1>

                    <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
                        Please read these Terms & Conditions carefully before using the Keen Overseas website and our consultancy services.
                    </p>

                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-slate-100">
                <div className="max-w-5xl mx-auto px-6 md:px-12">

                    <div className="space-y-8">

                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
                            >
                                <h2 className="text-2xl font-bold text-[#0B2E4A]">
                                    {section.title}
                                </h2>

                                <div className="w-16 h-1 bg-[#C89B3C] rounded-full mt-4"></div>

                                <p className="mt-6 text-slate-600 leading-8">
                                    {section.content}
                                </p>
                            </div>
                        ))}

                    </div>

                    <p className="text-center text-slate-500 mt-12">
                        Last Updated: June 2026
                    </p>

                </div>
            </section>
        </>
    );
};

export default TermsConditions;