"use client";

import { motion } from 'framer-motion';

export default function RegistrationsClient() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
         <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwritten text-6xl md:text-8xl font-bold mb-8 rotate-[-2deg]"
         >
            REGISTRATIONS
         </motion.h1>
         <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-400 mb-12">
            Current active registrations for upcoming events.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Enigma Card */}
             <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 shadow-[8px_8px_0px_0px] shadow-fin-red text-left">
                <div className="bg-fin-red text-white inline-block px-3 py-1 font-bold mb-4 font-handwritten">LIVE</div>
                <h3 className="font-handwritten text-4xl font-bold mb-4">ENIGMA &apos;26</h3>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">The flagship case study competition.</p>
                <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold border-2 border-transparent hover:border-zinc-900 dark:hover:border-white hover:bg-transparent hover:text-zinc-900 dark:hover:text-white transition-all">
                   Register Now
                </button>
             </div>

             {/* Estimania Card */}
             <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 shadow-[8px_8px_0px_0px] shadow-fin-blue text-left">
                <div className="bg-fin-blue text-white inline-block px-3 py-1 font-bold mb-4 font-handwritten">OPEN</div>
                <h3 className="font-handwritten text-4xl font-bold mb-4">ESTIMANIA</h3>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">Valuation challenge.</p>
                <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold border-2 border-transparent hover:border-zinc-900 dark:hover:border-white hover:bg-transparent hover:text-zinc-900 dark:hover:text-white transition-all">
                   Register Now
                </button>
             </div>

             {/* Behind The Stumps Card */}
             <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 shadow-[8px_8px_0px_0px] shadow-amber-500 text-left">
                <div className="bg-amber-500 text-white inline-block px-3 py-1 font-bold mb-4 font-handwritten">OPEN</div>
                <h3 className="font-handwritten text-4xl font-bold mb-4">BEHIND THE STUMPS</h3>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">IPL Auction Simulation.</p>
                <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold border-2 border-transparent hover:border-zinc-900 dark:hover:border-white hover:bg-transparent hover:text-zinc-900 dark:hover:text-white transition-all">
                   Register Now
                </button>
             </div>
         </div>
      </div>
    </main>
  );
}
