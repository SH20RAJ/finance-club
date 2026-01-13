"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';

export default function EstimaniaClient() {
  return (
    <main className="min-h-screen bg-black text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fin-blue/20 via-black to-black opacity-50"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="font-handwritten text-2xl md:text-3xl text-fin-blue mb-4 tracking-widest uppercase">Finance Club Presents</h2>
               <h1 className="font-handwritten text-7xl md:text-[9rem] font-bold mb-8 text-white leading-none rotate-[2deg] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  ESTIMANIA
               </h1>
               <p className="font-handwritten text-2xl md:text-4xl text-zinc-400 mb-12 max-w-4xl mx-auto rotate-[-1deg]">
                  How sharp is your instinct for value?
               </p>
               
               <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 font-handwritten text-xl">
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <Calendar className="w-6 h-6 text-fin-blue" />
                     19th Jan 2026
                  </div>
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <MapPin className="w-6 h-6 text-fin-blue" />
                     Room 233A, Main Building
                  </div>
                  <div className="flex items-center gap-2 justify-center text-zinc-300">
                     <Clock className="w-6 h-6 text-fin-blue" />
                     2:00 PM
                  </div>
               </div>

               <Link href="/join" className="inline-flex items-center gap-3 bg-fin-blue text-white px-10 py-5 rounded-full font-handwritten font-bold text-2xl border-2 border-white shadow-[6px_6px_0px_0px] shadow-white hover:shadow-[10px_10px_0px_0px] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  Register Team <ArrowRight className="w-6 h-6" />
               </Link>
            </motion.div>
         </div>
      </section>

      {/* Details Section */}
      <section className="py-24 container mx-auto px-6">
         <div className="max-w-4xl mx-auto bg-zinc-900 border-2 border-white p-12 shadow-[12px_12px_0px_0px] shadow-fin-blue rotate-[-1deg] hover:rotate-[0deg] transition-transform">
             <Target className="w-16 h-16 text-fin-blue mb-6 mx-auto" />
             <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-center mb-8">Concept & Rules</h2>
             <p className="font-handwritten text-xl text-zinc-300 leading-relaxed text-center mb-10">
                Estimania challenges your ability to gauge the true value of assets, commodities, and companies. 
                Using limited information and your financial acumen, can you predict the price before the market does?
                Accuracy is key, but speed matters.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4 bg-zinc-800 border-2 border-zinc-700 rounded-lg">
                   <h3 className="font-bold text-xl mb-2 text-fin-blue">Round 1</h3>
                   <p className="text-zinc-400">Rapid Fire Valuation</p>
                </div>
                <div className="p-4 bg-zinc-800 border-2 border-zinc-700 rounded-lg">
                   <h3 className="font-bold text-xl mb-2 text-fin-blue">Round 2</h3>
                   <p className="text-zinc-400">Case Analysis</p>
                </div>
                <div className="p-4 bg-zinc-800 border-2 border-zinc-700 rounded-lg">
                   <h3 className="font-bold text-xl mb-2 text-fin-blue">Finals</h3>
                   <p className="text-zinc-400">Live Auction</p>
                </div>
             </div>
         </div>
      </section>

    </main>
  );
}
