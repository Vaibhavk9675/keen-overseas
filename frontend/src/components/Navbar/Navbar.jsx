import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Countries", path: "/countries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F6F4EF]/100 backdrop-blur-3xl border-b border-[#E6ECF2]">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Keen Overseas"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className={({ isActive }) =>
                isActive
                  ? "text-[#C89B3C] font-semibold"
                  : "text-[#0B2E4A] hover:text-[#C89B3C] transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className=" w-11 h-11 rounded-full border border-slate-200 cursor-pointer flex items-center justify-center text-xl text-[#0B2E4A] hover:bg-slate-100 transition-all duration-300">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <Link
            to="/contact"
            className="bg-[#0B2E4A] hover:bg-[#3F5C7A] text-white px-5 py-2 rounded-lg font-semibold transition duration-300 shadow-sm"
          >
            Free Consultation
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#0B2E4A]"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white backdrop-blur-lg border-t border-white/10 px-6 py-5 space-y-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C89B3C] font-semibold"
                  : "block text-[#0B2E4A] hover:text-[#C89B3C] transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className=" w-full flex items-center justify-center \ gap-3 py-3 rounded-lg border border-slate-200 text-[#0B2E4A] transition">
            {darkMode ? <FiSun /> : <FiMoon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-[#0B2E4A] hover:bg-[#3F5C7A] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Free Consultation
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;