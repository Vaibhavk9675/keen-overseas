import ContactHero from "../components/Contact/ContactHero";
import ContactInfoCards from "../components/Contact/ContactInfoCards";
import ConsultationForm from "../components/ConsultationForm/ConsultationForm";
import OfficeMap from "../components/Contact/OfficeMap";
import ContactCTA from "../components/Contact/ContactCTA";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <ContactInfoCards />

            <ConsultationForm
              title="Book Your FREE Consultation"
              subtitle="Complete the form below and our counselors will contact you shortly."
              showMessage={true}
            />

          </div>

        </div>
      </section>

      <OfficeMap />

      <ContactCTA />
    </>
  );
};

export default Contact;