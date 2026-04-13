import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesText } from './sparkle.jsx';
import { Award, Calendar, CheckCircle2, Clock, Trophy, Crown, Medal, X, ChevronRight, Star } from 'lucide-react';
import resultBgVideo from '../../assets/ResultBG/resultbg.mp4';

const eventResults = [
  {
    id: 1,
    eventName: 'Business Plan Challenge 2026',
    eventDate: 'March 28, 2026',
    status: 'Declared',
    winners: [
      { position: 'Winner', team: 'InnovateX', members: 'Rohan, Aditi, Manav' },
      { position: '1st Runner-Up', team: 'Pitch Perfect', members: 'Rhea, Varun' },
      { position: '2nd Runner-Up', team: 'Growth Grid', members: 'Nikhil, Sneha' },
    ],
  },
  {
    id: 2,
    eventName: 'Startup Idea Sprint',
    eventDate: 'April 2, 2026',
    status: 'Declared',
    winners: [
      { position: 'Winner', team: 'Blue Orbit', members: 'Ankit, Mehul' },
      { position: '1st Runner-Up', team: 'Campus Founders', members: 'Tanya, Arav' },
      { position: '2nd Runner-Up', team: 'Launch Lab', members: 'Ira, Sameer' },
    ],
  },
  {
    id: 3,
    eventName: 'Prototype Showdown',
    eventDate: 'April 10, 2026',
    status: 'Coming Soon',
    winners: [],
  },
];

const getRankTheme = (position) => {
  if (position === 'Winner') {
    return {
      colors: 'from-amber-200 via-yellow-400 to-amber-600',
      border: 'border-yellow-500/50',
      bg: 'bg-yellow-500/10',
      glow: 'shadow-[0_0_30px_rgba(234,179,8,0.3)]',
      icon: Crown,
      text: 'text-yellow-400'
    };
  }
  if (position === '1st Runner-Up') {
    return {
      colors: 'from-slate-200 via-gray-300 to-slate-500',
      border: 'border-gray-300/50',
      bg: 'bg-gray-400/10',
      glow: 'shadow-[0_0_30px_rgba(156,163,175,0.3)]',
      icon: Medal,
      text: 'text-gray-300'
    };
  }
  return {
    colors: 'from-orange-300 via-orange-500 to-rose-700',
    border: 'border-orange-500/50',
    bg: 'bg-orange-500/10',
    glow: 'shadow-[0_0_30px_rgba(249,115,22,0.2)]',
    icon: Award,
    text: 'text-orange-400'
  };
};

export default function Result() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null);
        setFlippedCards({});
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  const openEventResult = (event) => {
    if (event.status !== 'Declared' || event.winners.length === 0) return;
    setSelectedEvent(event);
    setFlippedCards({});
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setFlippedCards({});
  };

  const toggleCardFlip = (position) => {
    setFlippedCards((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020813] font-sans selection:bg-blue-500/30">
      {/* Background Video & Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-lighten"
        >
          <source src={resultBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020813]/50 to-[#020813]"></div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558580/noise_yheymg.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:pt-32 md:px-8 md:pt-36 lg:px-10 z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center"
        >

          <SparklesText
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            colors={{ first: "#60A5FA", second: "#A78BFA" }}
            sparklesCount={15}
          >
            Hall of Fame
          </SparklesText>
          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            Celebrating the visionaries, builders, and champions of our events.
            Discover the teams that transformed ideas into excellence.
          </p>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {eventResults.map((event) => (
            <motion.article
              variants={itemVariants}
              key={event.id}
              className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-500/20 shadow-lg shadow-blue-500/10">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${event.status === 'Declared'
                      ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/10'
                      : 'border border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/10'
                      }`}
                  >
                    {event.status === 'Declared' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                    {event.status}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-bold leading-snug bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent transition-colors duration-300 group-hover:to-white">
                  {event.eventName}
                </h2>

                <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-400">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span>{event.eventDate}</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
                {event.winners.length > 0 && event.status === 'Declared' ? (
                  <button
                    type="button"
                    onClick={() => openEventResult(event)}
                    className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-4 text-sm font-semibold text-white ring-1 ring-white/10 transition-all duration-300 hover:from-blue-600/40 hover:to-purple-600/40 hover:ring-white/30 active:scale-[0.98] shadow-lg hover:shadow-blue-500/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Reveal Winners <Star className="h-4 w-4 text-yellow-400" />
                    </span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <div className="flex w-full items-center justify-center rounded-xl bg-white/5 px-6 py-4 text-sm font-medium text-slate-400 ring-1 ring-white/5">
                    Results Awaited
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal / Popup overlay for results */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[40] flex items-start justify-center bg-black/70 p-4 pt-[90px] pb-6 sm:p-6 sm:pt-[100px]"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0 z-0 cursor-pointer" onClick={closePopup}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative z-10 flex max-h-[calc(100vh-100px)] sm:max-h-[calc(100vh-120px)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] shadow-2xl shadow-blue-900/30"
            >
              {/* Decorative top gradient */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 py-6 sm:px-8">
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                    {selectedEvent.eventName}
                  </h3>
                  <p className="mt-2 text-sm text-blue-200/70 flex items-center gap-2">
                    <Medal className="h-4 w-4" /> Tap cards to visually reveal the champions
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closePopup}
                  className="rounded-full bg-white/5 p-2.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:rotate-90 active:scale-95"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <div className="grid gap-6 md:grid-cols-3">
                  {selectedEvent.winners.map((winner, index) => {
                    const isFlipped = !!flippedCards[winner.position];
                    const theme = getRankTheme(winner.position);
                    const Icon = theme.icon;

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        key={`${selectedEvent.id}-${winner.position}`}
                        className="group relative h-80 sm:h-[22rem] w-full perspective-[1500px]"
                        style={{ perspective: "1500px" }}
                      >
                        <motion.div
                          className="relative h-full w-full cursor-pointer"
                          style={{ transformStyle: 'preserve-3d' }}
                          onClick={() => toggleCardFlip(winner.position)}
                          animate={{ rotateY: isFlipped ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                          {/* FRONT OF CARD */}
                          <div
                            className={`absolute inset-0 flex h-full flex-col items-center justify-center rounded-2xl border ${theme.border} ${theme.bg} p-6 backdrop-blur-md transition-all duration-300 hover:${theme.glow}`}
                            style={{ backfaceVisibility: 'hidden' }}
                          >
                            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20 flex justify-end">
                              <Icon className="h-32 w-32 -mr-8 -mt-8" />
                            </div>

                            <div className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${theme.colors} p-0.5 shadow-xl`}>
                              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0B1120]">
                                <Icon className="h-10 w-10 text-white opacity-90" />
                              </div>
                            </div>

                            <div className="text-center z-10 w-full relative">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Award Position</h4>
                              <p className={`mt-3 text-3xl font-black bg-gradient-to-br ${theme.colors} bg-clip-text text-transparent drop-shadow-sm`}>
                                {winner.position}
                              </p>
                              <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-white/5 mx-auto max-w-[140px] px-4 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10 group-hover:text-white">
                                <span>Tap to reveal</span>
                                <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                  <ChevronRight className="h-3.5 w-3.5" />
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* BACK OF CARD */}
                          <div
                            className={`absolute inset-0 flex h-full flex-col justify-between rounded-2xl border ${theme.border} bg-[#0B1120] p-6 shadow-2xl overflow-hidden`}
                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                          >
                            {/* Decorative Glow */}
                            <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${theme.colors} opacity-10 blur-[50px] pointer-events-none`}></div>
                            <div className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-br ${theme.colors} opacity-[0.07] blur-[40px] pointer-events-none`}></div>

                            <div className="relative z-10 text-center flex-1 flex flex-col justify-center items-center">
                              <div className="mb-4">
                                <div className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${theme.colors} p-0.5`}>
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1120]">
                                    <Icon className={`h-6 w-6 ${theme.text}`} />
                                  </div>
                                </div>
                              </div>
                              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Winning Team</h4>
                              <p className="text-2xl font-black text-white mb-6 leading-tight drop-shadow-md">
                                {winner.team}
                              </p>

                              <div className="w-12 h-[2px] bg-white/10 rounded-full mb-6 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r ${theme.colors} opacity-50`}></div>
                              </div>

                              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Team Members</h4>
                              <p className="text-base font-medium text-blue-100/90 leading-relaxed max-w-[90%]">
                                {winner.members}
                              </p>
                            </div>

                            <div className="relative z-10 mt-2 text-center pt-4 border-t border-white/5">
                              <p className={`text-[10px] uppercase tracking-widest ${theme.text} font-bold opacity-70`}>
                                Official Result • E-Cell
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
