import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, Award, Globe, Rocket, X } from "lucide-react";
import { journeyTimeline } from "../../data/content";

const iconMap = { Users, TrendingUp, Award, Globe, Rocket };

const orbPositions = [
  { x: "15%", y: "30%", delay: 0 },
  { x: "30%", y: "65%", delay: 0.5 },
  { x: "50%", y: "45%", delay: 1 },
  { x: "70%", y: "70%", delay: 1.5 },
  { x: "85%", y: "25%", delay: 2 },
];

export function Journey() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      id="journey"
      className="relative bg-black overflow-hidden min-h-[600px] pt-28 pb-24 scroll-mt-28"
    >
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />

      {/* Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Journey
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our memories floating through time - each orb holds a story
            of innovation and growth
          </p>
        </motion.div>

        {/* Timeline Orbs */}
        <div className="relative h-[400px]">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 150 120 Q 300 250 400 180 T 700 280 T 850 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbs */}
          {journeyTimeline.map((item, index) => {
            const Icon = iconMap[item.icon];
            const pos = orbPositions[index];
            return (
              <motion.div
                key={item.year}
                className="absolute"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: pos.delay, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedItem(item)}
                    className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex flex-col items-center justify-center cursor-pointer glow-blue"
                  >
                    <Icon className="w-6 h-6 text-white mb-1" />
                    <span className="text-white text-xs font-bold">
                      {item.year}
                    </span>
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-x-0 top-20 bottom-0 z-900 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg max-h-[calc(100vh-7rem)] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl glow-blue"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>

              <div className="p-6 sm:p-8 -mt-12 relative z-10">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold">
                  {selectedItem.year} - {selectedItem.title}
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {selectedItem.fullDescription || selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
