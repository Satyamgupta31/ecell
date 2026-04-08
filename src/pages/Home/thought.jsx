import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import DirectorImage from "../../assets/About/Director.jpeg";
import FemaleImage from "../../assets/TeamMember/female.webp";

const cardVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    scale: 0.985,
    filter: "blur(2px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    scale: 0.985,
    filter: "blur(2px)",
  }),
};

const testimonials = [
  {
    id: 1,
    name: "Dr. Vivek Pandey",
    role: "Director of HMRITM",
    image: DirectorImage,
    quote:
      "The power to think differently and ahead of the times for the betterment of mankind is what sets entrepreneurs apart. India's young generation today has that power. History has witnessed that countries which have encouraged entrepreneurs have grown at a faster pace. Entrepreneurs create opportunities, create jobs, create value and create wonders out of nothing. E-Cell provides exposure to entrepreneurship at an early age, helping many students realize their potential as individuals and world citizens.",
  },
  {
    id: 2,
    name: "Dr. Shalini Gupta",
    role: "Deputy Director of HMRITM",
    image: FemaleImage,
    quote:
      "E-Cell should always feel like a launchpad for curiosity. When students get a space to experiment, collaborate, and present ideas without fear, they build the confidence to turn a thought into an actual venture. That is the environment we want to keep strengthening here.",
  },
];

export function Thought() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="thought" className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle at top, rgba(36, 96, 255, 0.14) 0%, transparent 34%), radial-gradient(circle at 50% 0%, rgba(202, 164, 92, 0.08) 0%, transparent 26%), radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 24%), radial-gradient(circle at 15% 80%, rgba(36, 96, 255, 0.06) 0%, transparent 22%)",
        }}
      />

      <motion.div
        className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(202,164,92,0.12) 0%, transparent 70%)" }}
        animate={{ y: [0, -16, 0], x: [0, 10, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] bottom-[8%] h-40 w-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(36,96,255,0.10) 0%, transparent 70%)" }}
        animate={{ y: [0, 18, 0], x: [0, -12, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p
            className="text-[2.85rem] leading-none font-semibold uppercase tracking-[0.18em] sm:text-6xl lg:text-[5rem]"
            style={{
              color: "#caa45c",
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            }}
          >
            Testimonial
          </p>

          <div className="relative mx-auto mt-10 max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[72px_minmax(0,1fr)_72px] lg:gap-6">
              <div className="hidden justify-center lg:flex">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={showPrevious}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-[#caa45c] shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 hover:border-blue-400/30"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <motion.article
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4, scale: 1.005 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[1.9rem] bg-[#132742] px-5 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.38)] ring-1 ring-white/5 sm:px-10 sm:py-12 lg:px-16 lg:py-16"
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05), transparent 38%), radial-gradient(circle at 50% 0%, rgba(36,96,255,0.18) 0%, transparent 34%)",
                  }}
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(110deg, transparent 10%, rgba(255,255,255,0.05) 45%, transparent 60%)",
                  }}
                  animate={{ x: ["-30%", "30%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 170, damping: 22, mass: 0.9 }}
                    className="relative z-10 mx-auto max-w-3xl text-center text-white"
                  >
                    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[rgba(202,164,92,0.35)] bg-[#0f1f33] shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:h-28 sm:w-28">
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ border: "1px solid rgba(202,164,92,0.38)" }}
                        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.1, 0.45] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        className="h-full w-full object-cover"
                        style={{ transform: "translateZ(0)" }}
                      />
                    </div>

                    <h3
                      className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.15rem]"
                      style={{ color: "#caa45c" }}
                    >
                      {activeTestimonial.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#e0bb79] sm:text-base">
                      {activeTestimonial.role}
                    </p>

                    <div className="relative mt-8 px-4 sm:px-8 lg:px-10">
                      <motion.div
                        className="absolute left-0 top-0"
                        animate={{ rotate: [0, 8, 0], y: [0, -2, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Quote
                          className="h-8 w-8 text-[#caa45c] opacity-90 sm:h-10 sm:w-10"
                          strokeWidth={2.2}
                        />
                      </motion.div>
                      <p className="mx-auto max-w-4xl text-base leading-8 text-white/95 sm:text-lg sm:leading-9">
                        {activeTestimonial.quote}
                      </p>
                      <motion.div
                        className="absolute bottom-0 right-0"
                        animate={{ rotate: [180, 172, 180], y: [0, 2, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Quote
                          className="h-8 w-8 text-[#caa45c] opacity-90 sm:h-10 sm:w-10"
                          strokeWidth={2.2}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="mt-6 hidden items-center justify-center gap-2 lg:flex"
                      initial={false}
                      animate={{ opacity: 1 }}
                    >
                      {testimonials.map((slide, index) => (
                        <motion.button
                          key={slide.id}
                          type="button"
                          aria-label={`Show testimonial ${index + 1}`}
                          onClick={() => {
                            setDirection(index > activeIndex ? 1 : -1);
                            setActiveIndex(index);
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.92 }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? "w-7 bg-[#caa45c]" : "w-2 bg-white/25"
                          }`}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.article>

              <div className="hidden justify-center lg:flex">
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={showNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-[#caa45c] shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 hover:border-blue-400/30"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative mt-6 flex items-center justify-between lg:hidden">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={showPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-[#caa45c] shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-7 bg-[#caa45c]" : "w-2 bg-white/25"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={showNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-[#caa45c] shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
