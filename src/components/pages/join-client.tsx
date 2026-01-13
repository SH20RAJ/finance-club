"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, User, Check } from 'lucide-react';

export default function JoinClient() {
  const [formType, setFormType] = useState<'individual' | 'team'>('individual');

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      <section className="pt-20 pb-20 container max-w-4xl mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
         >
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
              JOIN THE <span className="text-fin-red">CLUB</span>
            </h1>
            <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto rotate-[1deg]">
               Ready to dive into the world of finance? Choose your path below.
            </p>
         </motion.div>

         {/* Type Toggle */}
         <div className="flex justify-center mb-12 gap-8">
            <button 
               onClick={() => setFormType('individual')}
               className={`group flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-xl transition-all ${formType === 'individual' ? 'bg-fin-blue text-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white' : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
            >
               <User className={`w-6 h-6 ${formType === 'individual' ? 'text-white' : 'text-zinc-900 dark:text-white'}`} />
               Individual Join
            </button>
            <button 
               onClick={() => setFormType('team')}
               className={`group flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-xl transition-all ${formType === 'team' ? 'bg-fin-red text-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white' : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
            >
               <Users className={`w-6 h-6 ${formType === 'team' ? 'text-white' : 'text-zinc-900 dark:text-white'}`} />
               Register Team
            </button>
         </div>

         <AnimatePresence mode="wait">
            <motion.form 
               key={formType}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 md:p-12 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white space-y-8 rounded-xl"
            >
               {formType === 'individual' ? (
                 <>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="font-handwritten text-xl font-bold ml-1">Full Name</label>
                         <input type="text" placeholder="Aditya Raj" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow rounded-lg" />
                      </div>
                      <div className="space-y-2">
                         <label className="font-handwritten text-xl font-bold ml-1">Roll Number</label>
                         <input type="text" placeholder="BTECH/10000/23" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow rounded-lg" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="font-handwritten text-xl font-bold ml-1">Email Address</label>
                      <input type="email" placeholder="you@bitmesra.ac.in" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow rounded-lg" />
                   </div>

                   <div className="space-y-4">
                      <label className="font-handwritten text-xl font-bold ml-1">Interested In (Select all that apply)</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {["Equity Research", "Algorithmic Trading", "Corporate Finance", "Event Management", "Content & Design"].map((interest) => (
                            <label key={interest} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white cursor-pointer hover:bg-fin-blue/10 transition-colors group rounded-lg">
                               <div className="w-6 h-6 border-2 border-zinc-900 dark:border-white flex items-center justify-center bg-white dark:bg-zinc-800 group-hover:bg-fin-blue group-hover:border-fin-blue group-hover:text-white transition-all rounded-md">
                                  <input type="checkbox" className="opacity-0 w-full h-full cursor-pointer absolute" />
                                  <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                               </div>
                               <span className="font-handwritten text-xl">{interest}</span>
                            </label>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="font-handwritten text-xl font-bold ml-1">Comments / Why do you want to join?</label>
                      <textarea placeholder="Tell us about your passion for finance..." rows={4} className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow rounded-lg resize-none" />
                   </div>
                 </>
               ) : (
                 <>
                   <div className="space-y-2">
                      <label className="font-handwritten text-xl font-bold ml-1">Team Name</label>
                      <input type="text" placeholder="The Wolfpack of Wall Street" className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-red transition-shadow rounded-lg" />
                   </div>

                   <div className="space-y-4">
                      <label className="font-handwritten text-xl font-bold ml-1">Team Members (Up to 4)</label>
                      {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="flex gap-4">
                            <span className="flex items-center justify-center w-12 h-12 bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white font-bold text-xl rounded-lg">
                               {i}
                            </span>
                            <input type="text" placeholder={`Member ${i} Name & Roll No.`} className="flex-1 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-red transition-shadow rounded-lg" />
                         </div>
                      ))}
                   </div>
                 </>
               )}

               <div className="pt-4">
                  <button className={`w-full text-white border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-2xl py-4 hover:opacity-90 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all flex items-center justify-center gap-3 rounded-lg ${formType === 'individual' ? 'bg-fin-blue' : 'bg-fin-red'}`}>
                     {formType === 'individual' ? 'Submit Application' : 'Register Team'}
                     <ArrowRight className="w-6 h-6" />
                  </button>
               </div>
            </motion.form>
         </AnimatePresence>
      </section>

    </main>
  );
}
