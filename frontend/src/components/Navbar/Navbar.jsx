import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Countries", path: "/countries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg text-white border-b border-white/10 shadow-md">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(false);
          }}
          className="text-2xl font-bold tracking-wide"
        >
          Keen Overseas
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
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
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
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
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 px-6 py-5 space-y-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-400 font-medium"
                  : "block hover:text-yellow-400 transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;