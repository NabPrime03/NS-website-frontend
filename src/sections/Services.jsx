import { Code, Smartphone, GraduationCap, Database, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "High-performance, responsive websites built to scale with your business and convert visitors into customers.",
      icon: Code,
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile apps focused on usability, speed, and long-term maintainability.",
      icon: Smartphone,
    },
    {
      title: "Training & Placement",
      desc: "Industry-aligned training programs with hands-on projects and career guidance for aspiring professionals.",
      icon: GraduationCap,
    },
    {
      title: "IT Consultancy",
      desc: "Expert advice on system architecture, security, cloud adoption, and digital transformation strategies.",
      icon: Database,
    },
    {
      title: "Business Consultancy",
      desc: "Data-driven strategies to streamline operations, improve efficiency, and accelerate business growth.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-[#0B0F14] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical, scalable solutions designed to support your growth at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#111827] border border-white/10 p-8 rounded-2xl
                           hover:border-[#D4AF37]/40 transition shadow-lg shadow-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-5">
                  <Icon className="text-[#D4AF37]" />
                </div>

                <h3 className="text-lg text-white font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold
                       hover:bg-[#F1C232] transition shadow-lg shadow-[#D4AF37]/20"
          >
            Explore All Services →
          </a>
        </div>

      </div>
    </section>
  );
}
