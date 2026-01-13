"use client";

import { motion } from 'framer-motion';
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import { ArrowRight } from 'lucide-react';

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white">
      
      {/* Scroll Morph Hero Section */}
      <section className="h-screen w-full">
         <IntroAnimation />
      </section>

      {/* About Content */}
      <section className="py-24 px-6 container mx-auto">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]"
            >
              ABOUT <span className="text-fin-blue underline decoration-wavy decoration-2">US</span>
            </motion.h1>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 md:p-12 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white rotate-[1deg]"
            >
               <p className="font-handwritten text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 text-left">
                  The Finance Club of Birla Institute of Technology, Mesra is a student-led community that promotes financial literacy and practical understanding of finance. 
                  <br /><br />
                  It provides students with exposure to financial markets, investment strategies, corporate finance, and economic trends through workshops, discussions, and real-world case studies. The club aims to bridge the gap between academic learning and industry application while helping members develop analytical, professional, and decision-making skills essential for careers in finance and related fields.
               </p>
            </motion.div>
         </div>
      </section>

      {/* Fields of Interest */}
      <section className="py-24 bg-fin-blue/5 border-y-2 border-zinc-900 dark:border-white">
         <div className="container mx-auto px-6">
            <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-center mb-16 rotate-[-1deg]">
               OUR FIELDS OF <span className="text-fin-red">INTEREST</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   title: "Corporate Strategy", 
                   desc: "Understand how organizations plan, compete, and grow in dynamic markets.",
                   color: "bg-fin-blue"
                 },
                 { 
                   title: "Personal Finance", 
                   desc: "Build practical skills to manage money, savings, and long-term financial goals.",
                   color: "bg-fin-red"
                 },
                 { 
                   title: "Investments", 
                   desc: "Explore financial markets, asset classes, and risk-return decision making.",
                   color: "bg-amber-400"
                 }
               ].map((field, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
                   className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white flex flex-col justify-between h-full"
                 >
                    <div>
                      <div className={`w-12 h-12 ${field.color} border-2 border-zinc-900 dark:border-white mb-6 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white`}></div>
                      <h3 className="font-handwritten text-3xl font-bold mb-4">{field.title}</h3>
                      <p className="font-handwritten text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                        {field.desc}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all">
                       Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Stats Wrapper */}
      <section className="py-24 overflow-hidden">
         <div className="container mx-auto px-6">
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
