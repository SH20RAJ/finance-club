"use client";

import { motion } from 'framer-motion';
import { BarChart3, Newspaper, GraduationCap, Users } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
     { icon: <BarChart3 className="w-10 h-10" />, title: "Live Portfolio", desc: "Real-time tracking of club investments." },
     { icon: <Newspaper className="w-10 h-10" />, title: "Market News", desc: "Curated financial news from top sources." },
     { icon: <GraduationCap className="w-10 h-10" />, title: "Learning Modules", desc: "Structured courses on tech analysis." },
     { icon: <Users className="w-10 h-10" />, title: "Mentorship", desc: "1-on-1 guidance from seniors." },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-32 pb-20 px-6">
       <div className="container mx-auto">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center font-handwritten text-6xl md:text-8xl font-bold mb-20 rotate-[-2deg]"
          >
             PLATFORM <span className="text-fin-blue">FEATURES</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {features.map((f, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white dark:bg-zinc-900 p-8 border-2 border-zinc-900 dark:border-white shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white"
                >
                   <div className="text-fin-blue mb-6">{f.icon}</div>
                   <h3 className="font-handwritten text-3xl font-bold mb-4">{f.title}</h3>
                   <p className="text-zinc-600 dark:text-zinc-400 font-handwritten text-xl">{f.desc}</p>
                </motion.div>
             ))}
          </div>
       </div>
    </main>
  );
}
