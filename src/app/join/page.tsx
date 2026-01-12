'use client';

import { motion } from 'framer-motion';

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      
      <section className="pt-40 pb-20 container max-w-3xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-12"
         >
             <h1 className="font-handwritten text-[10vw] md:text-[5rem] leading-none font-bold mb-4 rotate-[-2deg]">
                JOIN THE <span className="text-fin-red underline decoration-wavy">REVOLUTION</span>
             </h1>
             <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-400 rotate-[1deg]">
                Become a part of the most prestigious finance community.
             </p>
         </motion.div>

         <motion.form 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-10 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white space-y-8"
         >
            {/* Personal Details */}
            <div className="space-y-6">
               <h3 className="text-3xl font-handwritten font-bold border-b-2 border-zinc-900 dark:border-white pb-2 mb-6 text-fin-blue">Personal Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-handwritten font-bold mb-2">Full Name</label>
                    <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-3 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all" />
                  </div>
                  <div>
                    <label className="block text-lg font-handwritten font-bold mb-2">Roll Number</label>
                    <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-3 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all" />
                  </div>
               </div>
               <div>
                  <label className="block text-lg font-handwritten font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-3 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all" />
               </div>
            </div>

            {/* Interest */}
            <div className="space-y-6">
                <h3 className="text-3xl font-handwritten font-bold border-b-2 border-zinc-900 dark:border-white pb-2 mb-6 text-fin-blue">Domain Interest</h3>
                <div className="grid grid-cols-2 gap-4">
                   {['Stock Market', 'Crypto', 'Investment Banking', 'Content Writing', 'Design', 'Web Dev'].map((interest) => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer group p-3 border-2 border-transparent hover:border-zinc-900 dark:hover:border-white transition-all rounded-lg select-none">
                         <div className="w-6 h-6 border-2 border-zinc-900 dark:border-white flex items-center justify-center bg-white dark:bg-zinc-800 group-hover:bg-fin-red group-hover:border-fin-red transition-colors">
                            <input type="checkbox" className="opacity-0 w-full h-full cursor-pointer" />
                         </div>
                         <span className="font-handwritten text-xl">{interest}</span>
                      </label>
                   ))}
                </div>
            </div>

            <button type="button" className="w-full bg-fin-red text-white font-handwritten font-bold text-2xl py-4 border-2 border-zinc-900 dark:border-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px] transition-all mt-8">
               SUBMIT APPLICATION
            </button>

         </motion.form>
      </section>

    </main>
  );
}
