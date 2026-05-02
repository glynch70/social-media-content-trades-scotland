'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, Camera, UserPlus } from 'lucide-react';

const benefits = [
  {
    title: "Stay visible",
    description: "Stay visible in your local area without chasing work by showing up consistently.",
    icon: Target
  },
  {
    title: "Build trust",
    description: "Build trust before people even contact you by showing the reality of your work.",
    icon: ShieldCheck
  },
  {
    title: "Show your work",
    description: "Show your work properly instead of relying on photos that don't tell the full story.",
    icon: Camera
  },
  {
    title: "Better jobs",
    description: "Attract better jobs, not just more enquiries, by showcasing your highest quality work.",
    icon: UserPlus
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              What This <span className="text-brand-yellow">Actually Does for Your Business</span>
            </h2>
            <p className="text-xl text-white/60 font-medium">
              We don't just make videos; we build a visibility system that grows your business.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-brand-yellow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 group-hover:bg-neutral-950/20 flex items-center justify-center mb-8 transition-colors duration-500">
                <benefit.icon className="text-brand-yellow group-hover:text-neutral-950 transition-colors duration-500" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-neutral-950 transition-colors duration-500">{benefit.title}</h3>
              <p className="text-white/60 group-hover:text-neutral-950/80 transition-colors duration-500 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
