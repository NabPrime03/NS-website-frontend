import { Code, Smartphone, GraduationCap, Database, Briefcase, ArrowRight, Check, MoveLeft, X, Volume2, VolumeOff, RotateCcw, Maximize, Minimize, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";

export default function Services() {

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [progress, setProgress] = useState(0);
  const maxVideoRef = useRef(null);

  // Get the active video element — by ID for card, by ref for maximized
  const getCardVideo = useCallback(() => {
    if (activeVideoIndex === null) return null;
    return document.getElementById(`service-video-${activeVideoIndex}`);
  }, [activeVideoIndex]);

  // Update progress bar as video plays
  useEffect(() => {
    const video = isMaximized ? maxVideoRef.current : getCardVideo();
    if (!video) return;
    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [activeVideoIndex, isMaximized, getCardVideo]);

  const handleMaximize = useCallback((e) => {
    e.stopPropagation();
    setIsMaximized((prev) => !prev);
  }, []);

  const services = [
    {
      title: "Website Development",
      desc: "High-performance, responsive websites built to scale with your business and convert visitors into customers.",
      icon: Code,
      emoji: "🌐",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile apps focused on usability, speed, and long-term maintainability.",
      icon: Smartphone,
      emoji: "📱",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Training & Placement",
      desc: "Industry-aligned training programs with hands-on projects and career guidance for aspiring professionals.",
      icon: GraduationCap,
      emoji: "🎓",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "IT Consultancy",
      desc: "Expert advice on system architecture, security, cloud adoption, and digital transformation strategies.",
      icon: Database,
      emoji: "💻",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Business Consultancy",
      desc: "Data-driven strategies to streamline operations, improve efficiency, and accelerate business growth.",
      icon: Briefcase,
      emoji: "📊",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
  ];

  const pulseVariant = {
    rest: { scale: 1, opacity: 0 },
    hover: {
      scale: [1, 1.5, 1.8],
      opacity: [0.6, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        repeat: Infinity
      }
    }
  };

  const toggleVideo = (index) => {
    if (activeVideoIndex === index) {
      setActiveVideoIndex(null);
      setVideoEnded(false);
      setPaused(false);
      setIsMaximized(false);
      setProgress(0);
    } else {
      setActiveVideoIndex(index);
      setVideoEnded(false);
      setPaused(false);
      setIsMaximized(false);
      setProgress(0);
    }
  };

  return (
    <section className="py-24 border-t border-white/10">

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

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
              const isActive = activeVideoIndex === i;

              return (

                <motion.div
                  key={i}
                  initial= "rest"
                  whileHover="hover"
                  animated= "rest"
                  className="group relative bg-[#111827]/70 border border-white/10 p-8 rounded-2xl hover:bg-[#111827]
                  hover:border-[#D4AF37]/40 transition hover:scale-1.05 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                >

                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">

                    {/* Service Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center">
                      <Icon className="text-[#D4AF37]" />
                    </div>

                    {/* Arrow + Emoji Trigger */}
                    <div className="relative">

                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-md pointer-events-none"
                        variants={pulseVariant}
                      />

                      <button
                        onClick={() => toggleVideo(i)}
                        className="relative z-10 flex items-center gap-2 group"
                      >
                        {/* Arrow Icon and watch video*/}
                        <div className="group flex flex-col items-end justify-center items-center gap-1">
                          <p className="text-sm text-[#D4AF37] font-medium hidden group-hover:block duration-300 ">
                            Watch Video
                          </p>
                          <MoveLeft className="w-7 h-4 text-[#D4AF37] transition-transform duration-300" />
                        </div>

                        {/* Emoji */}
                        <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                          {item.emoji}
                        </span>

                      </button>

                    </div>

                  </div>

                  <h3 className="text-lg text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Video Overlay — inline (card) or maximized (full website) */}
                  <AnimatePresence>

                    {isActive && !isMaximized && (

                      <motion.div
                        initial={{ opacity: 0, scale: 0.7, x: 120, y: -120 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7, x: 120, y: -120 }}
                        transition={{ duration: 0.45 }}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute inset-0 z-30 flex items-center justify-center p-6"
                      >

                        <div className="relative w-full aspect-video rounded-xl bg-black border border-[#D4AF37]/40 overflow-hidden shadow-2xl">

                          {/* Close Button (top-right) */}
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleVideo(i); }}
                            className="absolute top-3 right-3 z-50 p-1 bg-black/60 rounded-md text-[#D4AF37] hover:bg-black/80 transition"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          {/* Maximize Button (top-left) */}
                          <button
                            onClick={handleMaximize}
                            className="absolute top-3 left-3 z-50 p-1 bg-black/60 rounded-md text-[#D4AF37] hover:bg-black/80 transition"
                            title="Maximize"
                          >
                            <Maximize className="w-4 h-4" />
                          </button>

                          {/* Video Element */}
                          <video
                            id={`service-video-${i}`}
                            autoPlay
                            muted={muted}
                            onEnded={() => { setVideoEnded(true); setPaused(true); }}
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src={item.video} type="video/mp4" />
                          </video>

                          {/* Bottom Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />

                          {/* Progress Bar */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              const video = document.getElementById(`service-video-${i}`);
                              if (!video) return;
                              const rect = e.currentTarget.getBoundingClientRect();
                              const clickX = e.clientX - rect.left;
                              const percentage = Math.max(0, Math.min(1, clickX / rect.width));
                              video.currentTime = percentage * video.duration;
                            }}
                            className="absolute bottom-10 left-3 right-3 z-50 h-1.5 bg-white/20 rounded-full cursor-pointer group"
                          >
                            <div
                              className="h-full bg-[#D4AF37] rounded-full relative transition-all duration-100"
                              style={{ width: `${progress}%` }}
                            >
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition" />
                            </div>
                          </div>

                          {/* Bottom Controls Bar */}
                          <div className="absolute bottom-2 left-0 right-0 z-50 flex items-center justify-center gap-3 px-3">

                            {/* Play / Pause */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const video = document.getElementById(`service-video-${i}`);
                                if (!video) return;
                                if (video.paused) { video.play(); setPaused(false); }
                                else { video.pause(); setPaused(true); }
                              }}
                              className="p-1.5 bg-black/60 rounded-full text-[#D4AF37] hover:bg-black/80 transition"
                              title={paused ? "Play" : "Pause"}
                            >
                              {paused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                            </button>

                            {/* Mute / Unmute */}
                            <button
                              onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
                              className="p-1.5 bg-black/60 rounded-md text-[#D4AF37] hover:bg-black/80 transition"
                              title={muted ? "Unmute" : "Mute"}
                            >
                              {muted ? <VolumeOff className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>

                          </div>

                          {/* Video Ended Replay Overlay */}
                          {videoEnded && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const video = document.getElementById(`service-video-${i}`);
                                if (video) {
                                  video.currentTime = 0;
                                  video.play();
                                  setVideoEnded(false);
                                  setPaused(false);
                                }
                              }}
                              className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold z-40"
                            >
                              <RotateCcw className="w-6 h-6 mr-2 animate-spin-slow" />
                            </button>
                          )}
                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>

              );
            })}

          </div>

          {/* CTA */}
          <div className="text-center mt-16">

            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold
              hover:bg-[#F1C232] hover:scale-[1.05] transition shadow-lg shadow-[#D4AF37]/20"
            >
              Explore All Services →
            </a>

          </div>

        </div>

      </motion.section>

      {/* Maximized Video Overlay — covers the full website screen */}
      <AnimatePresence>
        {isMaximized && activeVideoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <div className="w-full h-full flex flex-col">

              {/* Video Area — takes remaining space above controls */}
              <div className="relative flex-1 min-h-0">
                <video
                  ref={maxVideoRef}
                  autoPlay
                  muted={muted}
                  onEnded={() => { setVideoEnded(true); setPaused(true); }}
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={services[activeVideoIndex].video} type="video/mp4" />
                </video>

                {/* Replay overlay when video ends */}
                {videoEnded && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-40">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const video = maxVideoRef.current;
                        if (video) {
                          video.currentTime = 0;
                          video.play();
                          setVideoEnded(false);
                          setPaused(false);
                        }
                      }}
                      className="p-4 bg-black/70 border border-[#D4AF37]/50 rounded-full text-[#D4AF37] hover:bg-black/90 transition"
                    >
                      <RotateCcw className="w-10 h-10" />
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Controls — fixed height, always visible */}
              <div className="shrink-0 bg-[#111827] border-t border-white/10 px-6 py-4 flex flex-col gap-3">

                {/* Progress Bar */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = maxVideoRef.current;
                    if (!video) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
                    video.currentTime = percentage * video.duration;
                  }}
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer group"
                >
                  <div
                    className="h-full bg-[#D4AF37] rounded-full relative transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg" />
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex items-center justify-center gap-5">

                  {/* Minimize */}
                  <button
                    onClick={handleMaximize}
                    className="p-1.5 bg-transparent text-[#D4AF37] hover:text-[#F1C232] transition"
                    title="Minimize"
                  >
                    <Minimize className="w-5 h-5" />
                  </button>

                  {/* Play / Pause */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = maxVideoRef.current;
                      if (!video) return;
                      if (video.paused) { video.play(); setPaused(false); }
                      else { video.pause(); setPaused(true); }
                    }}
                    className="p-1.5 bg-transparent text-[#D4AF37] hover:text-[#F1C232] transition"
                    title={paused ? "Play" : "Pause"}
                  >
                    {paused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
                    className="p-1.5 bg-transparent text-[#D4AF37] hover:text-[#F1C232] transition"
                    title={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <VolumeOff className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  {/* Close */}
                  <button
                    onClick={() => { setIsMaximized(false); setActiveVideoIndex(null); setVideoEnded(false); setPaused(false); setProgress(0); }}
                    className="p-1.5 bg-transparent text-[#D4AF37] hover:text-[#F1C232] transition"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}