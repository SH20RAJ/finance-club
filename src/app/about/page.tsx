'use client';

import { motion } from 'framer-motion';
import IntroAnimation from "@/components/ui/scroll-morph-hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white">
      
      {/* Scroll Morph Hero Section */}
      <section className="h-screen w-full">
         <IntroAnimation />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-10 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px] transition-all duration-300"
        >
           <h3 className="font-handwritten text-4xl font-bold mb-6 text-fin-blue rotate-[-1deg]">OUR MISSION</h3>
           <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
             To bridge the gap between theoretical knowledge and practical application in the world of finance. We aim to provide a platform for students to learn, experiment, and grow.
           </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-10 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px] transition-all duration-300 rotate-[1deg]"
        >
           <h3 className="font-handwritten text-4xl font-bold mb-6 text-fin-red rotate-[1deg]">OUR VISION</h3>
           <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
             To be the premier hub for financial education and distinct leadership, empowering students to make informed financial decisions and excel in their careers.
           </p>
        </motion.div>

      </section>

      {/* Stats Wrapper */}
      <section className="py-24 bg-fin-blue/5 border-y-2 border-zinc-900 dark:border-white overflow-hidden">
         <div className="container mx-auto px-6">
            <h2 className="font-handwritten text-[5vw] font-bold text-zinc-900/20 dark:text-white/20 text-center mb-16 rotate-[-2deg]">
               EST. 2012
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { label: "Members", value: "500+" },
                 { label: "Events", value: "100+" },
                 { label: "Speakers", value: "50+" },
                 { label: "Years", value: "12+" },
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ scale: 0.5, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-6 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px] transition-all"
                 >
                    <div className="text-4xl md:text-5xl font-handwritten font-bold text-zinc-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-fin-blue font-handwritten font-bold text-xl">{stat.label}</div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}
