import { CheckCircle, TrendingUp, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Skilled & Passionate Team",
      desc: "A focused group of developers and consultants committed to building reliable, real-world solutions.",
      icon: Sparkles,
    },
    {
      title: "Results-Oriented Approach",
      desc: "We prioritize measurable outcomes that improve efficiency, performance, and scalability.",
      icon: TrendingUp,
    },
    {
      title: "Tailored Solutions",
      desc: "Every solution is customized to your business goals — never forced into templates.",
      icon: CheckCircle,
    },
    {
      title: "Long-Term Support",
      desc: "From launch to optimization, we stay involved to ensure systems perform reliably.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-28 border-t border-white/10">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Why Choose Neuricorn Syndicate?
            </h2>
            <p className="text-slate-400">
              We combine strong technical execution with business understanding to
              deliver solutions that actually work in the real world.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">

            {/* ❌ NON-CLICKABLE CLIENT REVIEWS BUTTON */}
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed shadow-lg shadow-[#D4AF37]/25"
            >
              Client Reviews
            </button>

            {/* ✅ OUR WORK BUTTON (UNCHANGED) */}
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/10 hover:scale-[1.05] transition"
            >
              Our Work
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6
                             hover:border-[#D4AF37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]
                             hover:bg-[#111827] hover:-translate-y-1 hover:scale-[1.01]
                             transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="text-[#D4AF37]" size={22} />
                  </div>

                  <h4 className="font-semibold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </motion.section>
    </section>
  );
}