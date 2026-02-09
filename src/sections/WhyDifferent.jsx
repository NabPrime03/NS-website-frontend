import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function WhyDifferent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto"
    >
      <Users className="text-blue-600 mx-auto mb-4" size={32} />
      <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
      <p className="text-gray-600 leading-relaxed">
        We don’t separate learning from real work. Every project at NS is an
        opportunity for our team to improve, experiment, and deliver meaningful
        results. Clients benefit from fresh thinking and high energy, while
        students gain practical exposure that prepares them for the industry.
      </p>
    </motion.section>
  );
}
