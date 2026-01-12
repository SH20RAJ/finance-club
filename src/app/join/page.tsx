'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-fin-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 container max-w-3xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-12"
         >
             <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
                JOIN THE <span className="text-fin-red">REVOLUTION</span>
             </h1>
             <p className="text-white/60 text-lg">
                Become a part of the most prestigious finance community.
             </p>
         </motion.div>

         <motion.form 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="glass p-10 rounded-3xl space-y-8"
         >
            {/* Personal Details */}
            <div className="space-y-6">
               <h3 className="text-xl font-heading font-bold border-b border-white/10 pb-2 mb-6">Personal Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-fin-red outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Roll Number</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-fin-red outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-fin-red outline-none transition-colors" />
               </div>
            </div>

            {/* Interest */}
            <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold border-b border-white/10 pb-2 mb-6">Domain Interest</h3>
                <div className="grid grid-cols-2 gap-4">
                   {['Stock Market', 'Crypto', 'Investment Banking', 'Content Writing', 'Design', 'Web Dev'].map((interest) => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer group">
                         <input type="checkbox" className="w-5 h-5 accent-fin-red bg-white/10 border-white/20 rounded focus:ring-fin-red" />
                         <span className="text-sm group-hover:text-white transition-colors text-white/70">{interest}</span>
                      </label>
                   ))}
                </div>
            </div>

            <button type="button" className="w-full bg-fin-red hover:bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-fin-red/20 transition-all mt-8">
               SUBMIT APPLICATION
            </button>

         </motion.form>
      </section>

      <Footer />
    </main>
  );
}
