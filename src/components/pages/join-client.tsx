"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function JoinClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      <section className="pt-40 pb-20 container max-w-3xl mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
         >
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
              JOIN THE <span className="text-fin-red">CLUB</span>
            </h1>
            <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto rotate-[1deg]">
               Ready to dive into the world of finance? Fill out the form below to get started.
            </p>
         </motion.div>

         <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 md:p-12 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white space-y-8"
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="font-handwritten text-xl font-bold ml-1">Full Name</label>
                  <input type="text" placeholder="Aditya Raj" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow" />
               </div>
               <div className="space-y-2">
                  <label className="font-handwritten text-xl font-bold ml-1">Roll Number</label>
                  <input type="text" placeholder="BTECH/10000/23" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow" />
               </div>
            </div>

            <div className="space-y-2">
               <label className="font-handwritten text-xl font-bold ml-1">Email Address</label>
               <input type="email" placeholder="you@bitmesra.ac.in" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow" />
            </div>

            <div className="space-y-4">
               <label className="font-handwritten text-xl font-bold ml-1">Interested In (Select all that apply)</label>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Equity Research", "Algorithmic Trading", "Corporate Finance", "Event Management", "Content & Design"].map((interest) => (
                     <label key={interest} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white cursor-pointer hover:bg-fin-blue/10 transition-colors group">
                        <div className="w-6 h-6 border-2 border-zinc-900 dark:border-white flex items-center justify-center bg-white dark:bg-zinc-800 group-hover:bg-fin-red group-hover:border-fin-red transition-colors">
                           <input type="checkbox" className="opacity-0 w-full h-full cursor-pointer" />
                        </div>
                        <span className="font-handwritten text-xl">{interest}</span>
                     </label>
                  ))}
               </div>
            </div>

            <div className="pt-4">
               <button className="w-full bg-fin-blue text-white border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-2xl py-4 hover:bg-fin-blue/90 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all flex items-center justify-center gap-3">
                  Submit Application
                  <ArrowRight className="w-6 h-6" />
               </button>
            </div>
         </motion.form>
      </section>

    </main>
  );
}
