'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-fin-dark">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-fin-blue/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fin-red/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        
        {/* Intro Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-fin-blue font-sans font-medium text-lg tracking-widest uppercase mb-4"
        >
          Presenting our Flagship Event
        </motion.p>
        
        {/* Main Title FINSTREET */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-[12vw] leading-[0.85] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight"
        >
          FINSTREET
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="font-heading text-[5vw] text-fin-red translate-y-[-2vw] z-20"
        >
           BEHIND THE STUMPS
        </motion.h2>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl text-gray-400 font-sans text-xl mt-8 font-light"
        >
           Where strategy meets the spirit of cricket. <br/>
           <span className="text-white font-semibold">Build Smart. Bid Smarter.</span>
        </motion.p>
        
        {/* Countdown Timer (Static Placeholder for now, can be dynamic) */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.8 }}
           className="grid grid-cols-4 gap-8 mt-16 p-8 glass-card rounded-2xl"
        >
           <div className="flex flex-col items-center">
             <span className="text-4xl font-heading font-bold text-white">21</span>
             <span className="text-sm font-sans uppercase tracking-widest text-gray-500">Days</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-4xl font-heading font-bold text-white">14</span>
             <span className="text-sm font-sans uppercase tracking-widest text-gray-500">Hours</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-4xl font-heading font-bold text-white">20</span>
             <span className="text-sm font-sans uppercase tracking-widest text-gray-500">Mins</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-4xl font-heading font-bold text-fin-green animate-pulse">LIVE</span>
              <span className="text-sm font-sans uppercase tracking-widest text-fin-green/60">Status</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
