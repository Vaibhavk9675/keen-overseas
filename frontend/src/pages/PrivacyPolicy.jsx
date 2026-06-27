const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information including your name, email address, phone number, preferred study destination, and any other information you voluntarily provide through our consultation forms.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to provide immigration and education consultancy services, respond to enquiries, schedule consultations, improve our services, and communicate important updates.",
  },
  {
    title: "3. Sharing of Information",
    content:
      "We do not sell or rent your personal information. Your information may only be shared with trusted partners, educational institutions, or government authorities when necessary to process your application or as required by law.",
  },
  {
    title: "4. Cookies & Analytics",
    content:
      "Our website may use cookies and analytics tools to improve user experience, understand visitor behaviour, and enhance website performance.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organisational measures to protect your personal information from unauthorized access, disclosure, or misuse.",
  },
  {
    title: "6. Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information by contacting us directly. We will respond in accordance with applicable laws.",
  },
  {
    title: "7. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.",
  },
  {
    title: "8. Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be published on this page with the updated revision date.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy or your personal information, please contact Keen Overseas through the Contact page.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-center">

          <span className="text-[#AB2330] uppercase tracking-wider font-semibold">
            Legal
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A]">
            Privacy Policy
          </h1>

          <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
            Learn how Keen Overseas collects, uses, stores, and protects your personal information while providing immigration and education consultancy services.
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

export default PrivacyPolicy;