import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-10"
    >
      {/* Mission */}
      <div className="bg-[#111827] border border-white/10 p-10 rounded-2xl
                      shadow-lg shadow-black/40 hover:border-[#D4AF37]/40 transition">
        <Target className="text-[#D4AF37] mb-5" size={30} />
        <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
        <p className="text-slate-400 leading-relaxed">
          To bridge the gap between education and industry by creating
          opportunities where learning, innovation, and real-world problem
          solving happen together.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-[#111827] border border-white/10 p-10 rounded-2xl
                      shadow-lg shadow-black/40 hover:border-[#D4AF37]/40 transition">
        <Eye className="text-[#D4AF37] mb-5" size={30} />
        <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
        <p className="text-slate-400 leading-relaxed">
          To build a community-driven tech ecosystem where young innovators
          contribute to impactful projects while growing into skilled
          professionals.
        </p>
      </div>
    </motion.section>
  );
}
