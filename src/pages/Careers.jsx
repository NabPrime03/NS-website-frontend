import { useState } from "react";
import { motion } from "framer-motion";
import Popup from "../components/Popup";
import { careerCreate } from "../api/routes";

export default function Careers() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    short_bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    resume: null,
    tenth_percentage: "",
    twelfth_percentage: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      //using the API route "careerCreate" to submit the form data
      const res = await careerCreate(formData);

      // console.log("Career form submission response:", res);

      // Check if the response contains errors
      if (!res.message) {
         const errorList = Object.entries(res).flatMap(([field, messages]) =>
          Array.isArray(messages)
            ? messages.map((msg) => `${field}: ${msg}`)
            : [`${field}: ${messages}`]
        );
        console.error("Contact form submission error:", errorList);
        setPopup({
          show: true,
          message: "Failed to submit application. Check the form for errors.",
          type: "error",
        });
        return;
      }

      // Show success popup and reset form
      setPopup({
        show: true,
        message: "Application submitted successfully. Our team will reach out to you shortly.",
        type: "success",
      });


      setForm({
        full_name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        short_bio: "",
        github: "",
        linkedin: "",
        portfolio: "",
        resume: null,
        tenth_percentage: "",
        twelfth_percentage: "",
      });

    } catch (err) {
      console.error(err);
      setPopup({
        show: true,
        message: "Failed to submit application. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  return (
    <section className="bg-[#0B0F14] text-white">
      {/* Hero */}
      <div className="py-24 border-b border-white/10">
        <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1C232]">
            Careers at Neuricorn Syndicate
          </h1>
          <p className="text-slate-400 text-lg">
            Build real products, solve real problems, and grow with a driven tech team.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2 {...fadeUp(0.1)} className="text-2xl md:text-3xl font-bold text-center mb-4">
          Apply to Join Our Team
        </motion.h2>

        <motion.form
          {...fadeUp(0.2)}
          onSubmit={handleSubmit}
          className="bg-[#111827] border border-white/10 rounded-2xl p-10
                     grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-xl shadow-black/40"
        >
          <Input label="Full Name" name="full_name" value={form.full_name} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <Input label="Date of Birth" name="date_of_birth" type="date" value={form.date_of_birth} onChange={handleChange} />

          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Short Bio</label>
            <textarea
              name="short_bio"
              rows="4"
              value={form.short_bio}
              onChange={handleChange}
              required
              className="w-full bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2 text-white outline-none"
            />
          </div>

          <Input label="Resume" name="resume" type="file" onChange={handleChange} />
          <Input label="10th Percentage" name="tenth_percentage" type="number" value={form.tenth_percentage} onChange={handleChange} />
          <Input label="12th Percentage" name="twelfth_percentage" type="number" value={form.twelfth_percentage} onChange={handleChange} />
          <Input label="GitHub" name="github" value={form.github} onChange={handleChange} />
          <Input label="LinkedIn" name="linkedin" value={form.linkedin} onChange={handleChange} />

          <div className="sm:col-span-2">
            <Input label="Portfolio" name="portfolio" value={form.portfolio} onChange={handleChange} />
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="sm:col-span-2 bg-[#D4AF37] text-black py-3 rounded-lg font-semibold
                       hover:bg-[#F1C232] transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </motion.form>
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

/* Reusable Input */
function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        value={type === "file" ? undefined : value}
        onChange={onChange}
        required={type !== "url"}
        className="w-full bg-[#0B0F14] border border-white/10 rounded-lg px-3 py-2 text-white outline-none"
      />
    </div>
  );
}
