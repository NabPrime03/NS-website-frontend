import { Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Popup from "../components/Popup";
import { contactCreate } from "../api/routes";

export default function Contact() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_interested_in: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await contactCreate(form);
      console.log("Contact form submission response:", res);

      if (!res.message) {
        const errorList = Object.entries(res).flatMap(([field, messages]) =>
          Array.isArray(messages)
            ? messages.map((msg) => `${field}: ${msg}`)
            : [`${field}: ${messages}`]
        );
        console.error("Contact form submission error:", errorList);
        setPopup({
          show: true,
          message: "Failed to send message. Check the form for errors.",
          type: "error",
        });
        return;
      }

      setPopup({
        show: true,
        message: "Thank you for reaching out. We'll get back to you shortly.",
        type: "success",
      });

      setForm({
        full_name: "",
        email: "",
        phone: "",
        service_interested_in: "",
        message: "",
      });

    } catch (err) {
      console.error(err);

      setPopup({
        show: true,
        message: "Failed to send message. Please try again later.",
        type: "error",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0B0F14] text-white">

      {/* Hero */}
      <div className="py-24 border-b border-white/10">
        <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1C232]">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg">
            Have a project in mind or looking to collaborate?
            Send us a message and we’ll get back to you shortly.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">

        {/* Form */}
        <motion.form
          {...fadeUp(0.1)}
          onSubmit={handleSubmit}
          className="bg-[#111827] border border-white/10 p-10 rounded-2xl
                     shadow-xl shadow-black/40 space-y-5"
        >
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

          <div>
            <label className="text-sm text-slate-300">Full Name *</label>
            <input
              required
              value={form.full_name}
              onChange={(e) =>
                setForm({ ...form, full_name: e.target.value })
              }
              className="w-full mt-1 bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2
                         text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full mt-1 bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2
                         text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Phone (optional)</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full mt-1 bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2
                         text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Service Interested In</label>
            <select
              value={form.service_interested_in}
              onChange={(e) =>
                setForm({
                  ...form,
                  service_interested_in: e.target.value,
                })
              }
              className="w-full mt-1 bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2
                         text-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="training_placement">Training & Placement</option>
              <option value="it_consultancy">IT Consultancy</option>
              <option value="business_consultancy">Business Consultancy</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-300">Message *</label>
            <textarea
              rows="4"
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full mt-1 bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2
                         text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold
                       hover:bg-[#F1C232] transition shadow-lg shadow-[#D4AF37]/30
                       disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div {...fadeUp(0.2)} className="space-y-10">

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Contact Information
            </h2>
            <p className="text-slate-400 text-sm">
              We operate fully online and collaborate with clients remotely across locations.
            </p>
          </div>

          <Info icon={<Mail />} title="Email">
            business@neuricornsyndicate.com  
            ceo.neuricornsyndicate@gmail.com
          </Info>

          <Info icon={<Phone />} title="Phone">
            +91 7625011737
          </Info>

          <Info icon={<Clock />} title="Response Time">
            We usually respond within 24 hours on working days.
          </Info>

        </motion.div>
      </div>

      {/* Popup */}
      <Popup
        show={popup.show}
        message={popup.message}
        type={popup.type}
        onClose={() => setPopup({ ...popup, show: false })}
      />
    </section>
  );
}

/* Small helper component */
function Info({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-slate-400 whitespace-pre-line">
          {children}
        </p>
      </div>
    </div>
  );
}
