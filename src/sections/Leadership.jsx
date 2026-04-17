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
      linkedin: "https://www.linkedin.com/in/mohammed-kamil-9b1a4b1a7/",
      github: "https://github.com/m7kamil",
    },
    {
      name: "Saayima Zuha",
      role: "Operations Associate",
      desc: "Oversees end-to-end operations, daily execution, and internal coordination across teams. Ensures structured workflows, efficiency, and accountability to keep delivery aligned with business goals and timelines.",
      linkedin: "https://www.linkedin.com/in/saayima-zuha-a40322354",
      github: "https://github.com/SaayimaZuha",
    },
    {
      name: "R Harshitha",
      role: "HR Associate",
      desc: "Manages human resource operations and people-centric processes across the organization. She supports recruitment, internal communication, employee engagement, and HR workflows to foster a structured, positive, and compliant work environment.",
      github: "https://github.com/RSHarshitha",
    },
    {
      name: "Aditya Kulkarni",
      role: "Project Manager",
      desc: "Responsible for planning, coordinating, and executing projects from initiation to delivery. He manages timelines, resources, milestones, and cross-functional communication to ensure efficient execution aligned with technical, operational, and business goals.",
      linkedin: "https://www.linkedin.com/in/aditya-s-577344326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Adhikulkarn",
    },
    {
      name: "Nabneet Panda",
      role: "Project Manager",
      desc: "Known for calm leadership and a strong sense of responsibility, he coordinates projects and aligns teams to maintain clarity across workflows. His disciplined approach ensures steady progress, accountability, and consistent quality delivery.",
      github: "https://github.com/NabPrime03",
    },
    {
      name: "Sindhu Nadagouda",
      role: "Software Developer",
      desc: "Passionate Full Stack Developer with expertise in building scalable, efficient, and user-friendly applications. Skilled in frontend and backend technologies, I contribute to designing, developing, and optimizing solutions that enhance user experience and drive growth.",
      linkedin: "https://www.linkedin.com/in/sindhu-nadagouda-4b881635a",
      github: "https://github.com/sindhu010-tech",
    },
    {
      name: "Tisha R Choyal",
      role: "Software Developer",
      desc: "Aspiring Software Developer gaining hands-on experience by working on real-world development tasks while collaborating with remote teams. Skilled in modern workflows and problem-solving, I continuously enhance my technical expertise to build efficient, scalable solutions.",
      linkedin: "https://www.linkedin.com/in/tisha-r-choyal-5796872a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Tisha6708",
    },
    {
      name: "Shama Anjum",
      role: "Software Developer",
      desc: "Passionate Software Developer with expertise in building efficient, scalable, and user-friendly applications. Skilled in modern web technologies, I contribute to designing, developing, and optimizing innovative solutions that enhance user experience and drive business success.",
      linkedin: "https://www.linkedin.com/in/shama-anjum-649907216/",
      github: "https://github.com/anjumShama",
    },
  ];

  const Card = ({ member }) => (
    <div
      className="bg-[#111827]/70 border border-white/10 rounded-2xl p-5 text-center
                 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.05] hover:border-[#D4AF37]/40 hover:bg-[#111827] transition
                 flex flex-col"
    >
      <h4 className="font-semibold text-white text-lg mb-1">
        {member.name}
      </h4>

      <p className="text-[#D4AF37] text-sm font-medium mb-4">
        {member.role}
      </p>

      <p className="text-slate-300 text-sm leading-relaxed flex-grow">
        {member.desc}
      </p>

      {(member.linkedin || member.github) && (
        <div className="flex justify-center gap-4 mt-4 pt-3 border-t border-white/10">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 text-sm underline hover:text-[#D4AF37] transition"
            >
              LinkedIn
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 text-sm underline hover:text-[#D4AF37] transition"
            >
              GitHub
            </a>
          )}
        </div>
      )}
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
