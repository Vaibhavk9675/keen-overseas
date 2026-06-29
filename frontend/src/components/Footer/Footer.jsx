import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagramSquare,
  FaInstagram,
  FaSnapchat,
  FaSnapchatSquare,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2E4A] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

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

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#C89B3C] transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-[#C89B3C] transition"
                >
                  Terms and Condtion
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
                <span>+91 90846 82939</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#C89B3C]" />
                <span>info@keenoverseas.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C89B3C]" />
                <span>Second Floor, Raj Plaza, 207,<br /> Dilaram Chowk, Rajpur Rd,<br />Dehradun, Uttarakhand 248001</span>
              </div>

            </div>

            <div className="inline-flex items-center gap-2">

              <a
                href="https://www.facebook.com/profile.php?id=100093547092612"
                target="_blank"
                rel="noreferrer"
                className=" inline-flex items-center gap-2 mt-6 bg-[#2B475E] hover:bg-[#AB2330] px-2 py-2 rounded-xl font-medium transition">
                <FaFacebookF className="text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/keenoverseas"
                target="_blank"
                rel="noreferrer"
                className=" inline-flex items-center gap-2 mt-6 bg-[#2B475E] hover:bg-[#AB2330] px-2 py-2 rounded-xl font-medium transition">
                <FaInstagram className="text-2xl" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className=" inline-flex items-center gap-2 mt-6 bg-[#2B475E] hover:bg-[#AB2330] px-2 py-2 rounded-xl font-medium transition">
                <FaSnapchatGhost className="text-2xl" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className=" inline-flex items-center gap-2 mt-6 bg-[#2B475E] hover:bg-[#AB2330] px-2 py-2 rounded-xl font-medium transition">
                <FaTwitter className="text-2xl" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-white/60 text-sm">
            © 2026 Keen Overseas. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;