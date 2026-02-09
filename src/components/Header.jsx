import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Neuricorn Syndicate Logo"
            className="w-14 h-14 rounded-full object-contain"
          />

          <div className="leading-tight">
            <span className="block text-xl tracking-wide text-[#D4AF37] font-[Space_Grotesk] font-semibold">
              Neuricorn Syndicate
            </span>

            <span className="block text-xs tracking-wide text-slate-400">
              Software Solutions & Consultancy
            </span>
          </div>
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition font-medium ${active
                  ? "text-[#D4AF37]"
                  : "text-gray-200 hover:text-[#D4AF37]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white relative z-50 cursor-pointer focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`transition text-base ${active
                    ? "text-[#D4AF37]"
                    : "text-slate-200 hover:text-[#D4AF37]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
