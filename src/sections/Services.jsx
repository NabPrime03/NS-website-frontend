import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Code,
  Smartphone,
  GraduationCap,
  Database,
  Briefcase,
  ArrowRight,
  MoveLeft,
  X,
  Volume2,
  VolumeOff,
  RotateCcw,
  Maximize,
  Minimize,
  Pause,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import webDevVideo from "../assets/web-dev.mp4";
import appDevVideo from "../assets/app-dev-ns.mp4";
import itConsultancyVideo from "../assets/ITconsultancy-ns.mp4";
import businessVideo from "../assets/bussiness-ns.mp4";

export default function App() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [progress, setProgress] = useState(0);
  const maxVideoRef = useRef(null);

  const getCardVideo = useCallback(() => {
    if (activeVideoIndex === null) return null;
    return document.getElementById(`service-video-${activeVideoIndex}`);
  }, [activeVideoIndex]);

  useEffect(() => {
    if (isMaximized && maxVideoRef.current && activeVideoIndex !== null) {
      const cardVideo = document.getElementById(
        `service-video-${activeVideoIndex}`
      );
      if (cardVideo) {
        maxVideoRef.current.currentTime = cardVideo.currentTime;
      }
    }
  }, [isMaximized, activeVideoIndex]);

  useEffect(() => {
    const video = isMaximized
      ? maxVideoRef.current
      : getCardVideo();
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const currentProgress =
          (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);

        if (currentProgress >= 30 && !isMaximized) {
          setIsMaximized(true);
        }
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () =>
      video.removeEventListener("timeupdate", updateProgress);
  }, [activeVideoIndex, isMaximized, getCardVideo]);

  const handleMaximize = useCallback(
    (e) => {
      e.stopPropagation();
      if (isMaximized) {
        const cardVideo = getCardVideo();
        if (cardVideo && maxVideoRef.current) {
          cardVideo.currentTime =
            maxVideoRef.current.currentTime;
        }
      }
      setIsMaximized((prev) => !prev);
    },
    [isMaximized, getCardVideo]
  );

  
  const services = [
    {
      title: "Website Development",
      desc:
        "High-performance, responsive websites built to scale with your business and convert visitors into customers.",
      icon: Code,
      emoji: "🌐",
      video: webDevVideo,
      cardVideoClass: "w-full h-full object-cover object-[23%_center] ",
      maxVideoClass: "w-full h-full object-cover"
    },
    {
      title: "App Development",
      desc:
        "Native and cross-platform mobile apps focused on usability, speed, and long-term maintainability.",
      icon: Smartphone,
      emoji: "📱",
      video: appDevVideo,
      cardVideoClass: "w-full h-full object-contain ",
      maxVideoClass: "w-full h-full object-contain object-[50%_65%]"
    },

    /*{
      title: "Training & Placement",
      desc:
        "Industry-aligned training programs with hands-on projects and career guidance for aspiring professionals.",
      icon: GraduationCap,
      emoji: "🎓",
      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
      cardVideoClass: "w-full h-[210px] object-cover",
      maxVideoClass: "w-full h-full object-cover"
    },*/

    {
      title: "IT Consultancy",
      desc:
        "Expert advice on system architecture, security, cloud adoption, and digital transformation strategies.",
      icon: Database,
      emoji: "💻",
      video: itConsultancyVideo,
      cardVideoClass: "w-full h-[150%] object-cover object-[23%_center] ",
      maxVideoClass: "w-full h-full object-contain bg-transparent"
    },
    {
      title: "Business Consultancy",
      desc:
        "Data-driven strategies to streamline operations, improve efficiency, and accelerate business growth.",
      icon: Briefcase,
      emoji: "📊",
      video: businessVideo,
      cardVideoClass: "w-full h-[150%] object-cover object-[23%_center] ",
      maxVideoClass: "w-full h-full object-contain"
    }
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
    <div className="bg-[#030712] min-h-screen text-white font-sans overflow-x-hidden">
      <section className="py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-4">
                Our Services
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Practical, scalable solutions designed to support your growth at every stage.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              {services.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeVideoIndex === i;

                return (
                  <motion.div
                    key={i}
                    initial="rest"
                    whileHover="hover"
                    className="group relative h-full bg-[#111827]/70 border border-white/10 p-8 rounded-2xl hover:bg-[#111827]
                    hover:border-[#D4AF37]/40 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                  >
                    <div className={`transition-opacity duration-500 ${isActive ? "opacity-10" : "opacity-100"}`}>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center">
                          <Icon className="text-[#D4AF37] w-7 h-7" />
                        </div>
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-md pointer-events-none"
                            variants={pulseVariant}
                          />
                          <button
                            onClick={() => toggleVideo(i)}
                            className="relative z-10 flex items-center gap-2 group/btn"
                          >
                            <div className="flex flex-col items-end justify-center gap-1">
                              <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                Watch
                              </p>
                              <MoveLeft className="w-6 h-4 text-[#D4AF37] group-hover/btn:-translate-x-1 transition-transform duration-300" />
                            </div>
                            <span className="text-2xl group-hover/btn:scale-125 transition-transform duration-300">
                              {item.emoji}
                            </span>
                          </button>
                        </div>
                      </div>
                      <h3 className="text-xl text-white font-bold mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <AnimatePresence>
                      {isActive && !isMaximized && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute inset-0 z-30 rounded-2xl overflow-hidden"
                        >
                          <div className="relative w-full h-full bg-black/10 group/player">
                            <div className="absolute top-2 right-2 z-50 flex gap-2 opacity-0 group-hover/player:opacity-100 transition-opacity">
                              <div className="group/ctrl relative flex flex-col items-center">
                                <button
                                  onClick={handleMaximize}
                                  className="p-1.5 bg-black/60 rounded-md text-[#D4AF37] hover:bg-black/80 transition"
                                >
                                  <Maximize className="w-4 h-4" />
                                </button>
                                <span className="absolute top-full mt-1 text-[8px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Full</span>
                              </div>
                              <div className="group/ctrl relative flex flex-col items-center">
                                <button
                                  onClick={(e) => { e.stopPropagation(); toggleVideo(i); }}
                                  className="p-1.5 bg-black/60 rounded-md text-red-400 hover:bg-black/80 transition"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                                <span className="absolute top-full mt-1 text-[8px] font-bold text-red-400 uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Close</span>
                              </div>
                            </div>
                            
                            <video
                              id={`service-video-${i}`}
                                  autoPlay
                                  muted={muted}
                                  onEnded={() => {
                                  setVideoEnded(true);
                                  setPaused(true);
                                  }}
                                  playsInline
                                  className={item.cardVideoClass}
                            >
                                <source src={item.video} type="video/mp4" />
                            </video>

                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-3 opacity-0 group-hover/player:opacity-100 transition-opacity">
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
                                className="w-full h-1 bg-white/20 rounded-full cursor-pointer relative group/progress"
                              >
                                <div
                                  className="h-full bg-[#D4AF37] rounded-full relative transition-all duration-100"
                                  style={{ width: `${progress}%` }}
                                >
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                  <div className="group/ctrl relative flex flex-col items-center">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        const video = document.getElementById(`service-video-${i}`);
                                        if (!video) return;
                                        if (video.paused) { video.play(); setPaused(false); }
                                        else { video.pause(); setPaused(true); }
                                      }}
                                      className="text-[#D4AF37]"
                                    >
                                      {paused ? <Play size={18} fill="currentColor" /> : <Pause size={18} fill="currentColor" />}
                                    </button>
                                    <span className="absolute top-full mt-1 text-[8px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                      {paused ? 'Play' : 'Pause'}
                                    </span>
                                  </div>
                                  <div className="group/ctrl relative flex flex-col items-center">
                                    <button
                                      onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
                                      className="text-[#D4AF37]"
                                    >
                                      {muted ? <VolumeOff size={18} /> : <Volume2 size={18} />}
                                    </button>
                                    <span className="absolute top-full mt-1 text-[8px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                      {muted ? 'Unmute' : 'Mute'}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-300">
                                  {Math.floor(progress)}%
                                </span>
                              </div>
                            </div>

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
                                className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 group/repeat"
                              >
                                <div className="flex flex-col items-center gap-2">
                                  <div className="p-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
                                    <RotateCcw className="w-8 h-8" />
                                  </div>
                                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest opacity-0 group-hover/repeat:opacity-100 transition-opacity">Repeat</span>
                                </div>
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

            <div className="text-center mt-16">
              <button
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold
                hover:bg-[#F1C232] hover:scale-[1.05] transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
              >
                Explore All Services <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMaximized && activeVideoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/10 backdrop-blur-[10px] flex items-center justify-center p-4 sm:p-12"
              onClick={() => {
                const cardVideo = getCardVideo();
                if (cardVideo && maxVideoRef.current) {
                  cardVideo.currentTime = maxVideoRef.current.currentTime;
                }
                setIsMaximized(false);
                setActiveVideoIndex(null);
              }}
            >
              <div 
                className="w-full max-w-[130vh] aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl relative group/maxplayer"
                onClick={(e) => e.stopPropagation()}
              >
                <video
  ref={maxVideoRef}
  autoPlay
  muted={muted}
  onEnded={() => {
    setVideoEnded(true);
    setPaused(true);
  }}
  playsInline
  className={services[activeVideoIndex].maxVideoClass}
>
  <source
    src={services[activeVideoIndex].video}
    type="video/mp4"
  />
</video>

                <div className="absolute inset-0 opacity-0 group-hover/maxplayer:opacity-100 transition-opacity bg-gradient-to-t from-black/90 via-transparent to-black/60 flex flex-col justify-between p-6 sm:p-10">
                  <div className="flex justify-end items-start">
                     <div className="group/ctrl relative flex flex-col items-center">
                        <button 
                          onClick={() => {
                            const cardVideo = getCardVideo();
                            if (cardVideo && maxVideoRef.current) {
                              cardVideo.currentTime = maxVideoRef.current.currentTime;
                            }
                            setIsMaximized(false);
                            setActiveVideoIndex(null);
                          }}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                        >
                          <X className="w-6 h-6" />
                        </button>
                        <span className="absolute top-full mt-2 text-[10px] font-bold text-white uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none">Exit</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div
                      onClick={(e) => {
                        const video = maxVideoRef.current;
                        if (!video) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        video.currentTime = (clickX / rect.width) * video.duration;
                      }}
                      className="w-full h-2 bg-white/20 rounded-full cursor-pointer relative group/maxprogress"
                    >
                      <div
                        className="h-full bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] relative transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      >
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#D4AF37] rounded-full scale-0 group-hover/maxprogress:scale-100 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8 sm:gap-12">
                        <div className="group/ctrl relative flex flex-col items-center">
                          <button 
                            onClick={() => {
                              const v = maxVideoRef.current;
                              if (v.paused) { v.play(); setPaused(false); } else { v.pause(); setPaused(true); }
                            }}
                            className="text-[#D4AF37] hover:scale-110 transition"
                          >
                            {paused ? <Play size={32} fill="currentColor" /> : <Pause size={32} fill="currentColor" />}
                          </button>
                          <span className="absolute top-full mt-2 text-[10px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none">
                            {paused ? 'Play' : 'Pause'}
                          </span>
                        </div>
                        <div className="group/ctrl relative flex flex-col items-center">
                          <button onClick={() => setMuted(!muted)} className="text-[#D4AF37] hover:scale-110 transition">
                            {muted ? <VolumeOff size={32} /> : <Volume2 size={32} />}
                          </button>
                          <span className="absolute top-full mt-2 text-[10px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none">
                            {muted ? 'Unmute' : 'Mute'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-8">
                        <span className="text-lg font-mono text-slate-300 hidden sm:block">
                          {Math.floor(progress)}%
                        </span>
                        <div className="group/ctrl relative flex flex-col items-center">
                          <button onClick={handleMaximize} className="text-[#D4AF37] hover:scale-110 transition">
                            <Minimize size={32} />
                          </button>
                          <span className="absolute top-full mt-2 text-[10px] font-bold text-[#D4AF37] uppercase opacity-0 group-hover/ctrl:opacity-100 transition-opacity pointer-events-none">Shrink</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {videoEnded && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-[110] backdrop-blur-sm group/repeat">
                    <div className="flex flex-col items-center gap-4">
                      <button
                        onClick={() => {
                          const v = maxVideoRef.current;
                          v.currentTime = 0;
                          v.play();
                          setVideoEnded(false);
                          setPaused(false);
                        }}
                        className="p-8 bg-[#D4AF37] text-black rounded-full shadow-2xl hover:scale-110 transition"
                      >
                        <RotateCcw size={48} />
                      </button>
                      <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest opacity-0 group-hover/repeat:opacity-100 transition-opacity">Watch Again</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}