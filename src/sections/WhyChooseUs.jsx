import { CheckCircle, TrendingUp, Shield, Sparkles } from "lucide-react";

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
    <section className="bg-[#0B0F14] py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Why Choose Neuricorn Syndicate?
          </h2>
          <p className="text-slate-400">
            We combine strong technical execution with business understanding to
            deliver solutions that actually work in the real world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#111827] border border-white/10 rounded-2xl p-6
                           hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-black/40
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
    </section>
  );
}
