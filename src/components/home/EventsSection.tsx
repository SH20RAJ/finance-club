'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'ENIGMA',
    date: '19th Jan',
    location: 'Room 233A',
    description: 'Observe, Assess, and Decide.',
    color: 'text-fin-blue'
  },
  {
    id: 2,
    title: 'ESTIMANIA',
    date: '19th Jan',
    location: 'Room 234',
    description: 'Balance numbers, tactics, and team dynamics.',
    color: 'text-fin-red'
  },
  {
    id: 3,
    title: 'BEHIND THE STUMPS',
    date: '18th Jan',
    location: 'Seminar Hall 1',
    description: 'Question, Analyze, and Lead.',
    color: 'text-fin-green'
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 relative bg-fin-dark overflow-hidden">
       
        {/* Horizontal Ticker */}
        <div className="w-full border-y border-white/5 py-8 mb-20 overflow-hidden relative">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             className="flex gap-20 whitespace-nowrap"
           >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-[10vw] font-heading font-black text-transparent text-stroke leading-none opacity-20">
                   UPCOMING EVENTS •
                </span>
              ))}
           </motion.div>
        </div>

        <div className="container px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
               <motion.div
                 key={event.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.2 }}
                 viewport={{ once: true }}
                 className="glass-card p-8 rounded-2xl group hover:border-white/20 transition-all cursor-pointer"
               > 
                  <div className="flex justify-between items-start mb-12">
                     <span className={`font-heading text-4xl font-black ${event.color}`}>{event.title}</span>
                     <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-white/60 font-sans text-sm tracking-wider uppercase">
                        <span className="bg-white/10 px-3 py-1 rounded-full">{event.date}</span>
                        <span>{event.location}</span>
                     </div>
                     <p className="font-heading text-2xl font-bold text-white leading-tight">
                        {event.description}
                     </p>
                  </div>
               </motion.div>
            ))}
        </div>

    </section>
  );
}
