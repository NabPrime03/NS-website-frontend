export default function Stats() {
  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "20+", label: "Team Members" },
    { value: "24/7", label: "Support & Uptime" },
  ];

  return (
    <section className="bg-[#0B0F14] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#111827] border border-white/10 rounded-2xl py-10 px-6
                       hover:border-[#D4AF37]/40 transition shadow-lg shadow-black/40"
          >
            <h3 className="text-4xl font-bold text-[#D4AF37] mb-2">
              {item.value}
            </h3>
            <p className="text-slate-300 text-lg tracking-wide">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
