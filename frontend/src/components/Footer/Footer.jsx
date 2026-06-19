import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2E4A] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              Keen Overseas
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed">
              Helping students achieve their global education dreams
              through expert guidance, trusted partnerships, and
              personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#C89B3C] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#C89B3C] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/countries"
                  className="hover:text-[#C89B3C] transition"
                >
                  Countries
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#C89B3C] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Study Destinations
            </h3>

            <ul className="space-y-3 text-white/70">

              <li>Canada</li>
              <li>Australia</li>
              <li>United Kingdom</li>
              <li>United States</li>
              <li>Germany</li>
              <li>Singapore</li>
              <li>Cyprus</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-white/70">

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[#C89B3C]" />
                <span>+91 XXXXXXXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#C89B3C]" />
                <span>info@keenoverseas.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C89B3C]" />
                <span>Your Office Address</span>
              </div>

            </div>

            <a
              href="https://wa.me/916398610995"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-[#AB2330]
                hover:bg-[#941F2A]
                px-5
                py-3
                rounded-xl
                font-medium
                transition
              "
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-white/60 text-sm">
            © 2026 Keen Overseas. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-white/60">
            <span className="hover:text-[#C89B3C] cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-[#C89B3C] cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;