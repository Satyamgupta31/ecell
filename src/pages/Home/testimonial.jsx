import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/content';
import { staggerContainer, fadeUpVariants } from '@/lib/animations';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`w-4 h-4 ${
              i < rating ? 'text-blue-500 fill-blue-500' : 'text-slate-600'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Split testimonials into different sizes for masonry effect
  const leftColumn = testimonials.filter((_, i) => i % 3 === 0);
  const middleColumn = testimonials.filter((_, i) => i % 3 === 1);
  const rightColumn = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            What People Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Testimonials from our community members
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <StarRating rating={testimonial.rating} />
              </motion.div>
            ))}
          </div>

          {/* Middle Column - Offset */}
          <div className="space-y-6 md:mt-12">
            {middleColumn.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <StarRating rating={testimonial.rating} />
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <StarRating rating={testimonial.rating} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}