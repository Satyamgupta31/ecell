import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Rocket, Target, Lightbulb, X, Github, Linkedin, Settings } from "lucide-react";
import { builders } from "../../data/content";

const iconMap = { CheckCircle, Users, Rocket, Target, Lightbulb };
const colorKeys = ["blue", "purple", "pink", "green", "yellow"];

const colorMap = {
  blue: {
    bg: "from-blue-500 to-blue-700",
    glow: "glow-blue",
    ring: "border-blue-500",
  },
  purple: {
    bg: "from-purple-500 to-purple-700",
    glow: "glow-purple",
    ring: "border-purple-500",
  },
  pink: {
    bg: "from-pink-500 to-pink-700",
    glow: "glow-pink",
    ring: "border-pink-500",
  },
  green: {
    bg: "from-emerald-500 to-emerald-700",
    glow: "glow-green",
    ring: "border-emerald-500",
  },
  yellow: {
    bg: "from-amber-500 to-amber-700",
    glow: "glow-yellow",
    ring: "border-amber-500",
  },
};

const builderPositions = [
  { x: "20%", y: "25%" },
  { x: "70%", y: "20%" },
  { x: "50%", y: "55%" },
  { x: "25%", y: "70%" },
  { x: "75%", y: "75%" },
];

export function Builders() {
  const [selected, setSelected] = useState(null);

  const glowHex = {
    blue: "#3B82F6",
    purple: "#8B5CF6",
    pink: "#EC4899",
    green: "#10B981",
    yellow: "#F59E0B",
  };

  return (
    <section
      id="builders"
      className="relative py-24 bg-black overflow-hidden min-h-[700px]"
    >
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
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
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Meet the Builders
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            Elite crew operating the command center
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-400">SYSTEMS: OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 text-blue-500" />
              <span className="text-blue-400">CREW: 5 ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-3 h-3 text-purple-500" />
              <span className="text-purple-400">MISSION: IN PROGRESS</span>
            </div>
          </div>
        </motion.div>

        {/* Orbital Layout */}
        <div className="relative h-[500px]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient
                id="builderLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <motion.line
              x1="20%"
              y1="25%"
              x2="70%"
              y2="20%"
              stroke="url(#builderLineGradient)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.line
              x1="70%"
              y1="20%"
              x2="50%"
              y2="55%"
              stroke="url(#builderLineGradient)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.line
              x1="50%"
              y1="55%"
              x2="25%"
              y2="70%"
              stroke="url(#builderLineGradient)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.line
              x1="25%"
              y1="70%"
              x2="75%"
              y2="75%"
              stroke="url(#builderLineGradient)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </svg>

          {builders.map((builder, index) => {
            const colors = colorMap[builder.color] || colorMap[colorKeys[index % colorKeys.length]];
            const pos = builderPositions[index] || builderPositions[0];
            const name = builder.name || builder.title || "Elite Builder";
            const code = builder.code || builder.count || "0x00";
            const Icon = iconMap[builder.icon] || iconMap[builder.iconMapKey] || Rocket;

            return (
              <motion.div
                key={builder.code || builder.title || index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  onClick={() => setSelected(builder)}
                  role="button"
                  tabIndex={0}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute inset-0 rounded-full border-2 ${colors.ring} border-dashed`}
                    style={{
                      width: "110px",
                      height: "110px",
                      left: "-5px",
                      top: "-5px",
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-28 h-28 rounded-xl overflow-hidden border-2 flex items-center justify-center bg-slate-900 ${colors.ring} shadow-lg`}
                  >
                    {builder.image ? (
                      <img
                        src={builder.image}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${colors.bg} opacity-20 transition-opacity`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    )}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-30 pointer-events-none`}
                    />
                  </motion.div>

                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg px-3 py-2">
                      <p className="text-white font-semibold text-sm">
                        {name}
                      </p>
                      <p className="text-blue-400 text-xs">{code}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Detail modal for selected builder */}
          {selected && (
            <div className="fixed inset-0 z-30 flex items-center justify-center px-4">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />

              <div className="relative z-40 w-full max-w-5xl mx-0 md:mx-6">
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh]">
                  {/* Top-left hologram ID */}
                  <div className="absolute left-4 top-4 text-xs text-blue-400/70 tracking-wider">HOLOGRAM ID: {selected.holo || selected.code || '0000'}</div>

                  {/* Close button top-right */}
                  <button onClick={() => setSelected(null)} className="absolute right-4 top-4 w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800">
                    <X className="w-4 h-4" />
                  </button>

                  <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 overflow-auto">
                    {/* Left profile card */}
                    <div className="w-full md:w-72 flex-shrink-0">
                      <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-slate-800" style={{ boxShadow: `0 12px 40px ${glowHex[selected.color || 'purple']}33` }}>
                          {selected.image ? (
                            <img src={selected.image} alt={selected.name} className="w-full h-56 md:h-72 object-cover" />
                          ) : (
                            <div className={`w-full h-56 md:h-72 flex items-center justify-center bg-gradient-to-br ${colorMap[selected.color || colorKeys[0]].bg}`}>
                              <Rocket className="w-16 h-16 text-white/90" />
                            </div>
                          )}
                        </div>

                        {/* badge overlapping bottom */}
                        <div className="absolute left-1/2 -bottom-4 md:-bottom-6 -translate-x-1/2">
                          <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg border border-slate-800 text-center">
                            <div className="text-xs opacity-90">{selected.code || selected.count || '000'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right details */}
                    <div className="flex-1 text-slate-200 mt-4 md:mt-0 overflow-auto">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{selected.name || selected.title}</h2>
                      {selected.role && <div className="text-purple-400 mt-2 font-medium">{selected.role}</div>}

                      {/* small icon + code */}
                      <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                        <Settings className="w-4 h-4 text-slate-400" />
                        <div className="uppercase tracking-wider text-xs text-slate-400">{selected.code || selected.count || ''}</div>
                      </div>

                      {/* Tech Stack */}
                      {selected.tech && selected.tech.length > 0 && (
                        <div className="mt-6">
                          <div className="flex items-center gap-3">
                            <div className="w-1 h-6 bg-purple-500 rounded" />
                            <h4 className="font-semibold">Tech Stack</h4>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-3">
                            {selected.tech.map((t, i) => (
                              <div key={i} className="px-3 py-2 border border-slate-800 rounded-xl text-sm text-purple-300 bg-black/20">{t}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Mission Contribution */}
                      {selected.mission && (
                        <div className="mt-6">
                          <div className="flex items-center gap-3">
                            <div className="w-1 h-6 bg-purple-500 rounded" />
                            <h4 className="font-semibold">Mission Contribution</h4>
                          </div>
                          <p className="mt-3 text-slate-400">{selected.mission}</p>
                        </div>
                      )}

                      {/* Communication Channels */}
                      <div className="mt-6">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-6 bg-purple-500 rounded" />
                          <h4 className="font-semibold">Communication Channels</h4>
                        </div>
                        <div className="mt-3 flex gap-3 flex-wrap">
                          {selected.socials && selected.socials.github && (
                            <a href={selected.socials.github} className="w-12 h-12 rounded-lg border border-slate-800 flex items-center justify-center text-slate-200"> <Github className="w-5 h-5" /> </a>
                          )}
                          {selected.socials && selected.socials.linkedin && (
                            <a href={selected.socials.linkedin} className="w-12 h-12 rounded-lg border border-slate-800 flex items-center justify-center text-slate-200"> <Linkedin className="w-5 h-5" /> </a>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a href={selected.profile || '#'} className="w-full sm:w-auto text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm">View Profile</a>
                        <button className="w-full sm:w-auto px-4 py-2 border border-slate-700 text-slate-200 rounded-md text-sm" onClick={() => setSelected(null)}>Close</button>
                      </div>
                    </div>
                  </div>

                  {/* bottom-right status */}
                  <div className="absolute right-4 bottom-4 text-sm text-blue-400">STATUS: {selected.status || 'ACTIVE'}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
