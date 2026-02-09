import { motion } from "framer-motion";
import logo2 from "../assets/logo2.png";

export default function WhoWeAre() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >
      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-white">
          Who We Are
          <span className="block w-14 h-1 bg-[#D4AF37] mt-3 rounded-full" />
        </h2>

        <p className="text-slate-400 leading-relaxed mb-5">
          Neuricorn Syndicate (NS) is a growing technology consultancy driven by
          passionate engineers and young professionals who believe in learning
          by building real products.
        </p>

        <p className="text-slate-400 leading-relaxed">
          We collaborate with startups, organizations, and individuals to design
          and develop digital solutions while also helping students gain
          industry-relevant experience through real-world projects.
        </p>
      </div>

      {/* Visual Logo */}
      <div className="flex items-center justify-center relative">
        <motion.img
          src={logo2}
          alt="Neuricorn Syndicate Logo"
          className="relative w-56 md:w-64 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </div>
    </motion.section>
  );
}
