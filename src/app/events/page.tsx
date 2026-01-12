'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/layout/Footer";

const allEvents = [
  {
    title: 'ENIGMA',
    date: '2026-01-19T14:00',
    displayDate: '19th Jan 2026',
    location: 'Room 233A',
    description: 'Observe, Assess, and Decide. A strategic case study competition.',
    color: 'text-fin-blue',
    category: 'Competition'
  },
  {
    title: 'ESTIMANIA',
    date: '2026-01-19T10:00',
    displayDate: '19th Jan 2026',
    location: 'Room 234',
    description: 'Balance numbers, tactics, and team dynamics in this estimation challenge.',
    color: 'text-fin-red',
    category: 'Challenge'
  },
  {
    title: 'BEHIND THE STUMPS',
    date: '2026-01-18T11:00',
    displayDate: '18th Jan 2026',
    location: 'Seminar Hall 1',
    description: 'The ultimate cricket auction simulation. Bid smart, build your dream team.',
    color: 'text-fin-green',
    category: 'Flagship'
  }
];

export default function EventsPage() {
  
  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allEvents.map((event, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": event.title,
      "startDate": event.date,
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "addressCountry": "IN"
        }
      },
      "description": event.description
    }))
  };

  return (
    <main className="min-h-screen bg-fin-dark text-white selection:bg-fin-green selection:text-black">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 container px-6 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading text-[8vw] leading-none font-bold mb-12"
        >
           ALL <span className="text-fin-green">EVENTS</span>
        </motion.h1>

        <div className="grid grid-cols-1 gap-8">
            {allEvents.map((event, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-8 md:p-12 rounded-3xl border-l-4 border-l-transparent hover:border-l-fin-green transition-all group"
               >
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                     <div>
                        <div className="flex items-center gap-4 mb-2">
                           <span className="bg-fin-green/10 text-fin-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                              {event.category}
                           </span>
                           <span className="text-white/40 font-sans text-sm">{event.displayDate}</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-fin-green transition-colors">
                           {event.title}
                        </h2>
                        <p className="max-w-xl text-white/70 font-sans text-lg">
                           {event.description}
                        </p>
                     </div>

                     <div className="text-right">
                        <div className="font-sans font-bold text-xl text-white mb-1">{event.location}</div>
                        <button className="text-fin-green uppercase font-bold text-sm tracking-widest hover:underline decoration-2 underline-offset-4">
                           View Details
                        </button>
                     </div>
                  </div>
               </motion.div>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
