"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import { events } from '@/data/events';

export default function EventsClient() {
  const flagshipEvent = events.find(e => e.slug === 'enigma');
  const otherEvents = events.filter(e => e.slug !== 'enigma');

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-24 pb-20">
       <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-handwritten text-6xl md:text-9xl font-bold mb-4 rotate-[-2deg]"
             >
                UPCOMING <span className="text-fin-blue">EVENTS</span>
             </motion.h1>
             <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Join us for the most exciting financial challenges of the year.
             </p>
          </div>

          {/* Flagship Event Highlight */}
          {flagshipEvent && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-20 bg-zinc-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden group border-4 border-fin-red shadow-[12px_12px_0px_0px] shadow-zinc-400 dark:shadow-zinc-800"
             >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-fin-red opacity-20 rounded-full blur-[100px] group-hover:opacity-30 transition-opacity" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                   <div className="flex-1 text-center lg:text-left">
                      <div className="bg-fin-red inline-flex items-center gap-2 px-4 py-1 rounded-full font-bold mb-6 font-handwritten text-lg animate-pulse">
                         <Star className="fill-current w-4 h-4" /> FLAGSHIP EVENT
                      </div>
                      <h2 className="font-handwritten text-7xl md:text-8xl font-bold mb-6 text-white leading-none">
                         {flagshipEvent.title}
                      </h2>
                      <p className="font-handwritten text-3xl text-zinc-300 italic mb-8">
                         &quot;{flagshipEvent.tagline}&quot;
                      </p>
                      <p className="font-handwritten text-xl text-zinc-400 mb-8 max-w-xl">
                         {flagshipEvent.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-10 font-handwritten text-xl">
                         <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                            <Calendar className="w-5 h-5 text-fin-red" /> {flagshipEvent.date}
                         </div>
                         <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                            <MapPin className="w-5 h-5 text-fin-red" /> {flagshipEvent.venue}
                         </div>
                      </div>

                      <Link href={`/events/${flagshipEvent.slug}`} className="inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold text-xl hover:bg-fin-red hover:text-white transition-all transform hover:scale-105 shadow-[4px_4px_0px_0px] shadow-fin-red border-2 border-transparent">
                         View Details <ArrowRight className="w-6 h-6" />
                      </Link>
                   </div>
                   
                   {/* Visual side for Flagship */}
                   <div className="w-full lg:w-1/3 flex justify-center">
                      <div className="w-64 h-64 md:w-80 md:h-80 bg-fin-red/20 rounded-full border-4 border-fin-red flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                         <div className="text-9xl font-bold text-fin-red opacity-50 select-none">?</div>
                      </div>
                   </div>
                </div>
             </motion.div>
          )}

          {/* Other Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {otherEvents.map((event, i) => (
                <Link href={`/events/${event.slug}`} key={event.id}>
                   <motion.div 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 h-full hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px] hover:shadow-fin-blue transition-all group"
                   >
                      <div className="bg-fin-blue/10 w-fit px-3 py-1 rounded-full text-fin-blue font-bold text-sm mb-4 border border-fin-blue/20">
                         {event.category.toUpperCase()}
                      </div>
                      <h3 className="font-handwritten text-4xl font-bold mb-3 group-hover:text-fin-blue transition-colors">
                         {event.title}
                      </h3>
                      <p className="text-zinc-500 font-handwritten text-lg mb-6 line-clamp-2">
                         {event.description}
                      </p>
                      
                      <div className="space-y-3 font-handwritten text-zinc-600 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                         <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-fin-blue" />
                            <span>{event.date}</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-fin-blue" />
                            <span className="truncate">{event.venue.split(',')[0]}</span>
                         </div>
                      </div>
                      
                      <div className="mt-8 flex items-center text-fin-blue font-bold font-handwritten text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                         Explore Event <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                   </motion.div>
                </Link>
             ))}
          </div>

       </div>
    </main>
  );
}
