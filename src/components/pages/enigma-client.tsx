"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EnigmaClient() {
  return (
    <main className="min-h-screen bg-black text-zinc-50 selection:bg-fin-red selection:text-white pt-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fin-red/20 via-black to-black opacity-50"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="font-handwritten text-2xl md:text-3xl text-fin-red mb-4 tracking-widest uppercase">Finance Club Presents</h2>
               <h1 className="font-handwritten text-8xl md:text-[10rem] font-bold mb-8 text-white leading-none rotate-[-2deg] drop-shadow-[0_0_15px_rgba(255,59,59,0.5)]">
                  ENIGMA
               </h1>
               <p className="font-handwritten text-2xl md:text-4xl text-zinc-400 mb-12 max-w-4xl mx-auto rotate-[1deg]">
                  The Art of Strategic Thinking
               </p>
               
               <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 font-handwritten text-xl">
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <Calendar className="w-6 h-6 text-fin-red" />
                     18th Jan 2026
                  </div>
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <MapPin className="w-6 h-6 text-fin-red" />
                     Seminar Hall 1, RND Building
                  </div>
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <Clock className="w-6 h-6 text-fin-red" />
                     11:00 AM
                  </div>
               </div>

               <Link href="/join" className="inline-flex items-center gap-3 bg-fin-red text-white px-10 py-5 rounded-full font-handwritten font-bold text-2xl border-2 border-white shadow-[6px_6px_0px_0px] shadow-white hover:shadow-[10px_10px_0px_0px] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  Register Now <ArrowRight className="w-6 h-6" />
               </Link>
            </motion.div>
         </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <h2 className="font-handwritten text-5xl font-bold text-white mb-6">Where Strategy Meets <span className="text-fin-red">Uncertainty</span></h2>
               <p className="font-handwritten text-xl text-zinc-400 leading-relaxed">
                  ENIGMA is a case study–driven experience that pushes participants to unravel ambiguity, evaluate possibilities, and craft impactful solutions. It celebrates logic, foresight, and the ability to navigate complexity with confidence.
               </p>
               <p className="font-handwritten text-xl text-zinc-400 leading-relaxed">
                  Our flagship event built for minds that question, analyze, and lead. Do you have what it takes to decipher the market?
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-zinc-900 border-2 border-white p-8 rotate-[2deg] shadow-[12px_12px_0px_0px] shadow-fin-red"
            >
               <div className="aspect-square bg-zinc-800 flex items-center justify-center border border-zinc-700">
                  <span className="font-handwritten text-zinc-500 text-2xl">Event Teaser Image</span>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Countdown / Stats could go here based on Figma "20 Days 16 Hours" */}
       <section className="py-24 bg-zinc-900 border-y-2 border-white">
         <div className="container mx-auto px-6 text-center">
             <h3 className="font-handwritten text-4xl font-bold mb-12">Event Starts In</h3>
             <div className="flex justify-center gap-8 md:gap-16">
                 {[
                   { val: "05", label: "Days" },
                   { val: "12", label: "Hours" },
                   { val: "45", label: "Mins" },
                 ].map((t, i) => (
                    <div key={i} className="flex flex-col items-center">
                       <span className="font-handwritten text-6xl md:text-8xl font-bold text-fin-red">{t.val}</span>
                       <span className="font-handwritten text-xl text-zinc-400 uppercase tracking-widest">{t.label}</span>
                    </div>
                 ))}
             </div>
         </div>
       </section>

    </main>
  );
}
