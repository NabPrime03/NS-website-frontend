import {
  Code,
  Smartphone,
  GraduationCap,
  Database,
  Briefcase,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

import webdev from "../assets/webdev.png";
import appdev from "../assets/appdev.png";
import training from "../assets/p&t.png";
import itconsultancy from "../assets/ITconsultancy.png";
import businessconsultancy from "../assets/business consultancy.png";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      icon: Code,
      image: webdev,
      desc: "We build fast, responsive, and scalable websites tailored to your business needs — from landing pages to full web platforms.",
      points: [
        "Custom UI/UX design",
        "SEO-friendly structure",
        "High performance and security",
        "Admin dashboards if needed",
      ],
    },
    {
      title: "App Development",
      icon: Smartphone,
      image: appdev,
      desc: "Native and cross-platform mobile applications that focus on usability, performance, and long-term maintainability.",
      points: [
        "Android & iOS apps",
        "Cross-platform using React Native / Flutter",
        "API integration",
        "App store deployment support",
      ],
    },
    {
      title: "Training & Placement",
      icon: GraduationCap,
      image: training,
      desc: "Industry-focused training programs designed to build real-world skills and prepare students for tech careers.",
      points: [
        "Hands-on projects",
        "Mentorship from developers",
        "Interview preparation",
        "Career guidance & referrals",
      ],
    },
    {
      title: "IT Consultancy",
      icon: Database,
      image: itconsultancy,
      desc: "Technical consulting to help you design reliable systems and make the right technology decisions.",
      points: [
        "System architecture planning",
        "Cloud & deployment guidance",
        "Security best practices",
        "Tech stack selection",
      ],
    },
    {
      title: "Business Consultancy",
      icon: Briefcase,
      image: businessconsultancy,
      desc: "Strategic consulting to streamline operations and improve decision-making using data and technology.",
      points: [
        "Process optimization",
        "Automation strategy",
        "Growth planning",
        "Tech-driven business insights",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F14] text-white">
      {/* Hero */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1C232]">
            Our Services
          </h1>
          <p className="text-slate-400 text-lg">
            Practical, scalable solutions designed to support businesses and
            individuals at every stage of growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reverse = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-14 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
              >
                {/* Text */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center">
                      <Icon className="text-[#D4AF37]" />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
                    {service.points.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[#D4AF37]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-md rounded-3xl transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Not Sure Which Service Fits Your Needs?
          </h2>
          <p className="text-slate-400 mb-10">
            Talk to our team and we’ll guide you to the right solution for your
            goals.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-10 py-4 rounded-lg
                       font-semibold hover:bg-[#F1C232] transition shadow-lg shadow-[#D4AF37]/25"
          >
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
