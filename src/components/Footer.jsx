import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 text-white text-xl font-semibold mb-5">
            <img
              src={logo}
              alt="Neuricorn Syndicate Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="tracking-wide">Neuricorn Syndicate</span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Empowering businesses and individuals through innovative technology
            solutions and expert consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
            <li><Link to="/careers" className="hover:text-[#D4AF37] transition">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Website Development</li>
            <li>App Development</li>
            <li>Training & Placement</li>
            <li>IT Consultancy</li>
            <li>Business Consultancy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>

          <div className="flex flex-col gap-3 text-sm text-slate-400">

            <p className="flex items-start gap-2 text-sm text-slate-400">
              <Mail size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="min-w-0 break-words">
                business@neuricornsyndicate.com
              </span>
            </p>


            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4AF37]" />
              +91 7625011737
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-[#D4AF37]" />
              India (Remote Operations)
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-5">

              <a
                href="https://www.linkedin.com/in/neuricorn-syndicate-1a6297387"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin
                  size={20}
                  className="text-[#D4AF37] opacity-80 group-hover:opacity-100 transition"
                />
              </a>

              <a
                href="https://www.instagram.com/neuricorn.syndicate"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram
                  size={20}
                  className="text-[#D4AF37] opacity-80 group-hover:opacity-100 transition"
                />
              </a>

            </div>


          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-5 text-sm text-slate-500">
        © 2025 Neuricorn Syndicate LLP. All rights reserved.
      </div>
    </footer>
  );
}
