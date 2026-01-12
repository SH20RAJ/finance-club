'use client';

import { motion } from 'framer-motion';

const speakers = [
  { name: 'Koyesha Mukherjee', role: 'Stock Market' },
  { name: 'Virendra Verma', role: 'Personal Finance' },
  { name: 'Uzair Ahamad', role: 'Entrepreneurship' },
  { name: 'Sakchi Jain', role: 'Crypto Assets' },
  { name: 'Abhishek Kumar', role: 'Investment Banking' },
];

export function SpeakersSection() {
  return (
    <section className="py-24 bg-fin-dark relative">
      <div className="container px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-heading text-[10vw] md:text-[6vw] leading-none font-bold text-white opacity-10">
               SPEAKERS
            </h2>
            <div className="text-right">
               <p className="text-fin-blue font-sans font-bold text-lg tracking-widest uppercase">Expert Minds</p>
               <p className="text-white/60 font-sans text-sm">Leading the financial revolution</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {speakers.map((speaker, index) => (
               <motion.div
                 key={index}
                 whileHover={{ y: -10 }}
                 className="group relative h-[400px] bg-neutral-900 rounded-xl overflow-hidden cursor-pointer"
               >
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                     <p className="font-heading text-xl font-bold text-white mb-1 group-hover:text-fin-blue transition-colors">
                        {speaker.name}
                     </p>
                     <p className="font-sans text-xs text-white/50 uppercase tracking-wider">
                        {speaker.role}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
