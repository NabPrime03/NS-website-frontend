import { motion } from "framer-motion";

export default function Leadership() {
  const team = [
    {
      name: "Mohammed Kaif Ahmed",
      role: "Founder & CEO",
      desc: "Builds scalable, execution-first digital products, translating complex business problems into lean, market-ready software. Leads projects end-to-end with a focus on clarity, scalability, and long-term growth.",
    },
    {
      name: "Shakeel Ahmed",
      role: "Business Advisor",
      desc: "Brings 25+ years of experience in building and scaling businesses, guiding with real-world entrepreneurial wisdom. Provides clarity, stability, and practical insight through disciplined, sustainability-focused decision-making.",
    },
    {
      name: "Mohammed Kamil",
      role: "Technical Associate",
      desc: "Manages technical operations, development workflows, and system execution to ensure reliable delivery. Bridges hands-on technical work with operational oversight to support scalable, goal-aligned implementation.",
    },
    {
      name: "Saayima Zuha",
      role: "Operations Associate",
      desc: "Oversees end-to-end operations, daily execution, and internal coordination across teams. Ensures structured workflows, efficiency, and accountability to keep delivery aligned with business goals and timelines.",
    },
    {
      name: "Aditya Kulkarni",
      role: "Project Manager",
      desc: "Responsible for planning, coordinating, and executing projects from initiation to delivery. He manages timelines, resources, milestones, and cross-functional communication to ensure efficient execution aligned with technical, operational, and business goals.",
    },
    {
      name: "Nabneet Panda",
      role: "Project Manager",
      desc: "Known for calm leadership and a strong sense of responsibility, he coordinates projects and aligns teams to maintain clarity across workflows. His disciplined approach ensures steady progress, accountability, and consistent quality delivery.",
    },
    {
      name: "R Harshitha",
      role: "HR Associate",
      desc: "Manages human resource operations and people-centric processes across the organization. She supports recruitment, internal communication, employee engagement, and HR workflows to foster a structured, positive, and compliant work environment.",
    },
  ];

  const Card = ({ member }) => (
    <div
      className="bg-[#111827] border border-white/10 rounded-2xl p-5 text-center
                 shadow-lg shadow-black/40 hover:border-[#D4AF37]/40 transition
                 flex flex-col"
    >
      <h4 className="font-semibold text-white text-lg mb-1">
        {member.name}
      </h4>

      <p className="text-[#D4AF37] text-sm font-medium mb-4">
        {member.role}
      </p>

      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
        {member.desc}
      </p>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-white">
        Leadership & Core Team
      </h2>

      <p className="text-slate-400 mb-14 max-w-2xl mx-auto">
        The people responsible for strategy, execution, and building long-term
        partnerships with our clients.
      </p>

      {/* First row */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {team.slice(0, 4).map((member, i) => (
          <Card key={i} member={member} />
        ))}
      </div>

      {/* Second row centered */}
      <div className="flex justify-center">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
          {team.slice(4).map((member, i) => (
            <Card key={i} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
