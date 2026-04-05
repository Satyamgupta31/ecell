import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/content";
import { staggerContainer, fadeUpVariants } from "../../lib/animations";

// ─── Star Rating ─────────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
        >
          <Star
            className={`w-3.5 h-3.5 ${
              i < rating ? "text-blue-400 fill-blue-400" : "text-slate-700"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Single Card ─────────────────────────────────────────────────────────────
function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="relative group mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.025, zIndex: 10 }}
    >
      {/* Glow border on hover */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(48,96,255,0.5), rgba(106,176,255,0.2), rgba(48,96,255,0.4))",
          filter: "blur(0.5px)",
        }}
      />

      <div
        className="relative rounded-2xl p-5 overflow-hidden transition-all duration-500"
        style={{
          background: "rgba(10,12,24,0.92)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Ambient inner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(48,96,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Quote icon */}
        <motion.div
          className="absolute top-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity duration-500"
          whileHover={{ rotate: 10, scale: 1.2 }}
        >
          <Quote className="w-8 h-8 text-blue-400" />
        </motion.div>

        {/* Avatar + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-shrink-0">
            {/* Ring pulse */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid rgba(48,96,255,0.5)" }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-11 h-11 rounded-full object-cover"
              style={{ border: "1.5px solid rgba(48,96,255,0.3)" }}
            />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-blue-400 text-xs mt-0.5">{testimonial.role}</p>
          </div>
        </div>

        {/* Quote text */}
        <p className="text-slate-400 text-xs leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <StarRating rating={testimonial.rating} />
          {/* Shimmer bar */}
          <motion.div
            className="h-[1px] w-0 group-hover:w-12 transition-all duration-500 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6ab0ff)" }}
          />
        </div>

        {/* Bottom edge glow line */}
        <motion.div
          className="absolute bottom-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(90deg, transparent, rgba(48,96,255,0.6), transparent)" }}
        />
      </div>
    </motion.div>
  );
}

// ─── Infinite Scroll Column ───────────────────────────────────────────────────
function ScrollColumn({ items, direction = "down", speed = 30 }) {
  const y = useMotionValue(0);
  const doubled = [...items, ...items];
  const ITEM_HEIGHT = 190; // approx card height + gap
  const TOTAL = items.length * ITEM_HEIGHT;

  useAnimationFrame((_, delta) => {
    const move = (delta / 1000) * speed;
    let current = y.get();

    if (direction === "down") {
      current += move;
      if (current >= TOTAL) current = 0;
    } else {
      current -= move;
      if (current <= -TOTAL) current = 0;
    }
    y.set(current);
  });

  return (
    <div className="relative overflow-hidden h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[620px]">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000000, transparent)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }} />

      <motion.div style={{ y }}>
        {doubled.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export function Testimonials() {
  const leftColumn   = testimonials.filter((_, i) => i % 3 === 0);
  const middleColumn = testimonials.filter((_, i) => i % 3 === 1);
  const rightColumn  = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background radial */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(30,70,180,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* Floating ambient orbs */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "20%", left: "5%", width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(48,96,255,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%", right: "5%", width: "250px", height: "250px",
          background: "radial-gradient(circle, rgba(106,176,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(48,96,255,0.1)",
              border: "1px solid rgba(80,140,255,0.25)",
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-400 text-xs tracking-widest uppercase font-mono">
              Community Voice
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(110deg, #ffffff 0%, #6ab0ff 50%, #3060ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            What People Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            Testimonials from our community members
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-6 h-[1px] w-32"
            style={{ background: "linear-gradient(90deg, transparent, #3060ff, transparent)" }}
          />
        </motion.div>

        {/* Three auto-scroll columns - Responsive */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Col 1 — top to bottom */}
          <motion.div variants={fadeUpVariants} className="sm:col-span-2 lg:col-span-1">
            <ScrollColumn items={leftColumn.length >= 2 ? leftColumn : testimonials.slice(0, 3)} direction="down" speed={28} />
          </motion.div>

          {/* Col 2 — bottom to top (offset start) */}
          <motion.div variants={fadeUpVariants} className="sm:mt-0 lg:mt-10">
            <ScrollColumn items={middleColumn.length >= 2 ? middleColumn : testimonials.slice(1, 4)} direction="up" speed={22} />
          </motion.div>

          {/* Col 3 — top to bottom (different speed) - Show on all sizes */}
          <motion.div variants={fadeUpVariants} className="lg:mt-10">
            <ScrollColumn items={rightColumn.length >= 2 ? rightColumn : testimonials.slice(2, 5)} direction="down" speed={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
