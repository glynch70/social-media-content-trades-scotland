'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-neutral-900 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight leading-none">
            Let’s Get Your <span className="text-brand-yellow">Content Sorted</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
            We only take on a limited number of clients at a time.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/book"
              className="inline-flex items-center gap-3 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-lg rounded-full shadow-[0_20px_50px_rgba(221,163,30,0.3)] hover:shadow-[0_20px_50px_rgba(221,163,30,0.5)] transition-all duration-300"
            >
              Check Availability
              <ArrowRight size={24} />
            </a>
          </motion.div>
          
          <p className="mt-8 text-white/40 text-sm font-bold uppercase tracking-[0.2em]">
            Limited availability for monthly trades content partners
          </p>
        </motion.div>
      </div>
    </section>
  );
}
