// import React, { useEffect, useMemo, useState } from 'react';
// import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
// import { Star } from 'lucide-react';
// import { testimonials } from '@/data/content';

// function StarRating({ rating }) {
//   const safeRating = Number.isFinite(rating) ? rating : 5;

//   return (
//     <div className="flex gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: i * 0.1 }}
//         >
//           <Star
//             className={`w-4 h-4 ${
//               i < safeRating ? 'text-blue-500 fill-blue-500' : 'text-slate-600'
//             }`}
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function TestimonialCard({ testimonial }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="w-80 sm:w-96 shrink-0 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={testimonial.image}
//           alt={testimonial.name}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <div>
//           <h4 className="text-white font-semibold">{testimonial.name}</h4>
//           <p className="text-blue-400 text-sm">{testimonial.role}</p>
//         </div>
//       </div>

//       <p className="text-slate-400 text-sm leading-relaxed mb-4">
//         &ldquo;{testimonial.quote}&rdquo;
//       </p>
//       <StarRating rating={testimonial.rating} />
//     </motion.div>
//   );
// }

// function rotateArray(items, offset) {
//   if (!items.length) return [];
//   const normalized = ((offset % items.length) + items.length) % items.length;
//   return [...items.slice(normalized), ...items.slice(0, normalized)];
// }

// function MarqueeRow({ items, direction = 'left', speed = 48 }) {
//   if (!items.length) return null;

//   const baseX = useMotionValue(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const CARD_AND_GAP_WIDTH = 408;
//   const trackWidth = items.length * CARD_AND_GAP_WIDTH;

//   useEffect(() => {
//     baseX.set(direction === 'right' ? -trackWidth : 0);
//   }, [baseX, direction, trackWidth]);

//   useAnimationFrame((_, delta) => {
//     if (isPaused || trackWidth <= 0) return;

//     const step = (delta / 1000) * speed;
//     let current = baseX.get();

//     if (direction === 'left') {
//       current -= step;
//       if (current <= -trackWidth) current = 0;
//     } else {
//       current += step;
//       if (current >= 0) current = -trackWidth;
//     }

//     baseX.set(current);
//   });

//   const looped = [...items, ...items, ...items];

//   return (
//     <div
//       className="overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onTouchStart={() => setIsPaused(true)}
//       onTouchEnd={() => setIsPaused(false)}
//     >
//       <motion.div
//         className="flex gap-6 px-2 will-change-transform"
//         style={{ x: baseX, width: 'max-content' }}
//       >
//         {looped.map((testimonial, idx) => (
//           <TestimonialCard
//             key={`${testimonial.name}-${idx}`}
//             testimonial={testimonial}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default function Testimonials() {
//   const firstRow = useMemo(() => rotateArray(testimonials, 0), []);
//   const secondRow = useMemo(() => rotateArray(testimonials, 1), []);
//   const thirdRow = useMemo(() => rotateArray(testimonials, 2), []);

//   return (
//     <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
//             What People Say
//           </h2>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             Testimonials from our community members
//           </p>
//         </motion.div>

//         <div className="space-y-6">
//           <MarqueeRow items={firstRow} direction="left" speed={45} />
//           <MarqueeRow items={secondRow} direction="right" speed={42} />
//           <MarqueeRow items={thirdRow} direction="left" speed={40} />
//         </div>
//       </div>
//     </section>
//   );
// }