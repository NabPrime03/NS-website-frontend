import { motion } from "framer-motion";
import { Github, Figma, Play } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: " Food and vouchers mobile UI kit  app",
      developer: "Shama Anjum",
      description:
        "A food ordering platform with integrated vouchers and discounts, enabling users to explore restaurants and enjoy a seamless experience.",
      techStack: [
        "React Native",
        "Metro Bundler",
        "VS Code",
        "Android Studio",
        "React Navigation",
        "Axios",
      ],
      image: "/images/image1.jpeg",
      githubUrl: "https://github.com/NS-Technical-Associate/Food-Vouchers-App",
      figmaUrl:
        "https://www.figma.com/design/66kAb70sg5ASLHPsSq58XB/Food---Vouchers-Mobile-App-UI-Kit-App--FREE---Community-?node-id=1-2&p=f&t=Qj3So0HvEedeWWVo-0",
      video: "/videos/project1.mp4",
    },
    {
      title: "Dermatology Healthcare App",
      developer: "Tisha R Choyal",
      description:
        "A full-stack mobile application that enables users to analyze skin conditions, consult dermatologists, and book appointments in real-time.",
      techStack: [
        "React Native",
        "Metro Bundler",
        "React Navigation",
        "Axios",
      ],
      image: "/images/image2.jpeg",
      githubUrl: "https://github.com/NS-Technical-Associate/Healthcare-App",
      figmaUrl:
        "https://www.figma.com/design/ODanZbZn0GohmMCOpxuhj8/Medical-Health-Mobile-App-Dermatology-App-Ui-Kit-Doctor-Mobile-App--Community-?node-id=67-92&t=KSDpFv6oCcwvi0tw-0",
      video: "/videos/project2.mp4",
    },
    {
      title: "Banking App",
      developer: "Sindhu Nadagouda",
      description:
        "A secure digital banking app that allows users to manage accounts, transfer money, and track transactions with real-time updates.",
      techStack: ["React ", "JavaScript", "Axios"],
      image: "/images/image3.jpeg",
      githubUrl: "https://github.com/NS-Technical-Associate/Banking-App",
      figmaUrl:
        "https://www.figma.com/design/skuVrWNLSFquZeS1YXJDfm/%F0%9F%92%B8-Banking-App-Mobile-UI-design--Community-?node-id=0-1&p=f&t=NPjsXC0lrCCniqob-0",
      video: "/videos/project3.mp4",
    },
    {
      title: "Drive Me App",
      developer: "Sindhu Nadagouda",
      description:
        "A modern application built to deliver efficient performance and smooth user experience across multiple features.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "/images/image4.jpeg",
      githubUrl: "https://github.com/NS-Technical-Associate/DriveMe-Client",
      figmaUrl:
        "https://www.figma.com/design/esGse638HmmplliabXVEQf/Driver-app?node-id=0-1&p=f&t=I7Lm2GQ4a80RMU9o-0",
      video: "/videos/project4.mp4",
    },
  ];

  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* HEADER */}
        <section className="py-24 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1C232]">
              Our Work
            </h1>
            <p className="text-slate-400 text-lg">
              Real projects built by our developers — proof of what we can deliver.
            </p>
          </div>
        </section>

        {/* CARDS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden w-full sm:w-[45%] lg:w-[30%] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition"
              >
                {/* IMAGE WITH PLAY BUTTON */}
                <div
                  className="h-40 bg-black flex items-center justify-center cursor-pointer relative group"
                  onClick={() => setSelectedVideo(p.video)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain bg-black rounded-t-2xl"
                  />

                  {/* PLAY OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-[#D4AF37] p-4 rounded-full shadow-lg transform group-hover:scale-110 transition">
                      <Play size={22} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-[#D4AF37] text-sm mb-3">
                    by {p.developer}
                  </p>
                  <p className="text-slate-400 text-sm mb-4">
                    {p.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mb-4">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition"
                    >
                      <Github size={14} />
                      GitHub
                    </a>

                    <a
                      href={p.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition"
                    >
                      <Figma size={14} />
                      Figma
                    </a>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90%] md:w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-lg font-bold shadow-lg hover:scale-110 transition z-50"
            >
              ✕
            </button>

            {/* VIDEO */}
            <div className="bg-black p-2 rounded-xl">
              <video controls autoPlay className="w-full rounded-lg">
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}