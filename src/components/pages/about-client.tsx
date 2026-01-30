"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Calendar } from 'lucide-react';
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white">
      
      {/* New Fintech Hero Section */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-fin-blue/5 dark:bg-fin-blue/10 pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fin-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
         
         <div className="container px-6 relative z-10 text-center">
            <Reveal variant="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fin-blue/20 bg-fin-blue/5 mb-8">
                    <Sparkles className="w-4 h-4 text-fin-blue" />
                    <span className="font-sans font-medium text-sm text-fin-blue tracking-wide uppercase">Since 2011</span>
                </div>
            </Reveal>

            <Reveal variant="scale-up" delay={0.2}>
                <h1 className="font-heading font-black text-6xl md:text-8xl tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                   ABOUT <span className="text-fin-blue">US</span>
                </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
                <p className="font-sans text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
                   Fostering financial literacy and market awareness at BIT Mesra. We are the bridge between academic theory and real-world finance.
                </p>
            </Reveal>
         </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 container mx-auto relative z-10 -mt-20">
         <Reveal variant="fade-up" delay={0.5}>
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6">
                      <h3 className="font-heading text-3xl font-bold">Our Mission</h3>
                      <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          The Finance Club of Birla Institute of Technology, Mesra is a student-led community that promotes financial literacy and practical understanding of finance.
                      </p>
                      <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          It provides students with exposure to financial markets, investment strategies, corporate finance, and economic trends through workshops, discussions, and real-world case studies.
                      </p>
                   </div>
                   <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl h-64 w-full flex items-center justify-center border border-zinc-200 dark:border-white/5">
                      <span className="text-zinc-400 font-sans">Team / Club Photo Placeholder</span>
                   </div>
                </div>
            </div>
         </Reveal>
      </section>

      {/* Fields of Interest */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5">
         <div className="container mx-auto px-6">
            <Reveal variant="fade-up">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
                   OUR FIELDS OF <span className="text-fin-blue">INTEREST</span>
                </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   title: "Corporate Strategy", 
                   desc: "Understand how organizations plan, compete, and grow in dynamic markets.",
                   icon: TrendingUp
                 },
                 { 
                   title: "Personal Finance", 
                   desc: "Build practical skills to manage money, savings, and long-term financial goals.",
                   icon: Users
                 },
                 { 
                   title: "Investments", 
                   desc: "Explore financial markets, asset classes, and risk-return decision making.",
                   icon: Calendar
                 }
               ].map((field, i) => (
                 <Reveal key={i} variant="fade-up" delay={i * 0.1}>
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-8 rounded-3xl hover:border-fin-blue/50 transition-colors group h-full">
                       <div className="w-12 h-12 bg-fin-blue/10 rounded-2xl flex items-center justify-center mb-6 text-fin-blue group-hover:bg-fin-blue group-hover:text-white transition-colors">
                          <field.icon className="w-6 h-6" />
                       </div>
                       <h3 className="font-heading text-2xl font-bold mb-4">{field.title}</h3>
                       <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                         {field.desc}
                       </p>
                    </div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* Stats Wrapper */}
      <section className="py-24 border-t border-zinc-200 dark:border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { label: "Members", value: "500+" },
                 { label: "Events", value: "100+" },
                 { label: "Speakers", value: "50+" },
                 { label: "Years", value: "12+" },
               ].map((stat, i) => (
                 <Reveal key={i} variant="scale-up" delay={i * 0.1}>
                    <div className="p-6">
                       <div className="text-5xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-fin-blue to-fin-indigo mb-2">{stat.value}</div>
                       <div className="text-zinc-500 font-sans font-medium uppercase tracking-widest text-sm">{stat.label}</div>
                    </div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}
