import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = 919756604100; // Replace with client's WhatsApp number

  const message =
    "Hi Keen Overseas, I would like to know more about studying abroad.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    
    <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 group"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

        {/* Desktop Version */}
        <div className="hidden md:flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">

          <FaWhatsapp className="text-3xl flex-shrink-0" />

          <div className="leading-tight">
            {/* <p className="font-semibold text-sm">
              Chat With Us
            </p> */}

            <p className="text-xs opacity-90">
              WhatsApp
            </p>
          </div>

        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl transition duration-300">

          <FaWhatsapp className="text-white text-4xl" />

        </div>
      </a>
  );
};

export default WhatsAppButton;