import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
    { name: "Programs", path: "/#courses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-blue dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-none dark:border-slate-700 transition-colors duration-300">

      <div className="max-w-7xl h-16 mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

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
          {navLinks.map((link) =>
            link.path.includes("#") ? (
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#0B2E4A] dark:text-slate-200 hover:text-[#C89B3C] transition duration-300">
                {link.name}
              </HashLink>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth", }) }
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#C89B3C] font-semibold"
                    : "block text-[#0B2E4A] dark:text-slate-200 hover:text-[#C89B3C] transition duration-300"
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          <button
            onClick={toggleTheme}
            className=" w-11 h-11 rounded-full border border-slate-200 cursor-pointer flex items-center justify-center text-xl text-[#0B2E4A] dark:text-white dark:border-[#0B2E4A] hover:bg-slate-100 dark:hover:bg-[#0B2E4A] transition-all duration-300">
            {darkMode ? <FiSun /> : <FiMoon />} 
          </button>

          <Link
            to="/contact"
            className="bg-[#0B2E4A] dark:bg-[#C89B3C] hover:bg-[#3F5C7A] dark:hover:bg-yellow-500 text-white dark:text-[#0B2E4A] px-5 py-2 rounded-lg font-semibold transition duration-300 shadow-sm"
          >
            Free Consultation
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#0B2E4A] dark:text-white"
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
        <div className="md:hidden bg-white dark:bg-[#111827] backdrop-blur-lg border-t border-slate-200 dark:border-slate-700 px-6 py-5 space-y-5 transition-colors duration-300">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C89B3C] font-semibold"
                  : "block text-[#0B2E4A] dark:text-slate-200 hover:text-[#C89B3C] transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center \ gap-3 text-center bg-[#0B2E4A] dark:bg-[#C89B3C] hover:bg-[#3F5C7A] dark:hover:bg-yellow-500 text-white dark:text-[#0B2E4A] font-semibold py-3 rounded-lg transition duration-300">
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