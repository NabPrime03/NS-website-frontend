import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Client Name 1",
      company: "Company A",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      review:
        "Neuricorn Syndicate delivered beyond our expectations. Highly recommended!",
    },
    {
      name: "Client Name 2",
      company: "Company B",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      review:
        "Professional team, great communication, and excellent results.",
    },
    {
      name: "Client Name 3",
      company: "Company C",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      review:
        "They understood our requirements perfectly and delivered on time.",
    },
  ];

  return (
    <div className="text-white">

      {/* HEADER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 border-b border-white/10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1C232]">
          Client Reviews
        </h1>

        <p className="text-slate-400 text-lg mb-6">
          Hear directly from our clients about their experience working with Neuricorn Syndicate.
        </p>

        {/* REVIEWS BUTTON (DISABLED - NO REDIRECT) */}
        <button
          disabled
          className="cursor-not-allowed opacity-50 bg-[#F1C232] text-black px-6 py-3 rounded-xl font-semibold"
        >
          Reviews
        </button>
      </motion.section>

      {/* REVIEWS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition"
            >
              
              {/* VIDEO */}
              <div className="aspect-video">
                <iframe
                  src={r.videoUrl}
                  title={r.name}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              {/* TEXT */}
              <div className="p-6">
                <p className="text-slate-300 text-sm mb-4 italic">
                  "{r.review}"
                </p>
                <p className="text-[#D4AF37] font-semibold">{r.name}</p>
                <p className="text-slate-400 text-sm">{r.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}