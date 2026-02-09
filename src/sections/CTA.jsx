import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#0B0F14] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to Build Something Impactful?
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Let’s discuss how Neuricorn Syndicate can support your business, product,
          or idea with scalable technology solutions.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-10 py-4 rounded-lg
                     font-semibold hover:bg-[#F1C232] transition shadow-lg shadow-[#D4AF37]/25"
        >
          Contact Us Today <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}
