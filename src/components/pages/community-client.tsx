"use client";

import { motion } from 'framer-motion';
import { Instagram, Hash } from 'lucide-react';
import Image from 'next/image';

export default function CommunityClient() {
  const posts = [
    { id: 1, date: "27 Dec 2025", user: "@finpro_bit", img: "placeholder" },
    { id: 2, date: "25 Dec 2025", user: "@finpro_bit", img: "placeholder" },
    { id: 3, date: "20 Dec 2025", user: "@finpro_bit", img: "placeholder" },
    { id: 4, date: "15 Dec 2025", user: "@finpro_bit", img: "placeholder" },
    { id: 5, date: "10 Dec 2025", user: "@finpro_bit", img: "placeholder" },
    { id: 6, date: "05 Dec 2025", user: "@finpro_bit", img: "placeholder" },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      {/* Header */}
      <section className="pt-20 pb-20 container mx-auto px-6 text-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
              OUR <span className="text-fin-blue">COMMUNITY</span>
            </h1>
            <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto rotate-[1deg]">
               We value connection, growth, and shared success.
            </p>
         </motion.div>
      </section>

      {/* Social Wall */}
      <section className="py-12 container max-w-6xl mx-auto px-6">
         <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 md:p-12 shadow-[12px_12px_0px_0px] shadow-zinc-900 dark:shadow-white rounded-xl">
             <div className="flex justify-between items-center mb-12 border-b-2 border-zinc-200 dark:border-zinc-800 pb-6">
                <div>
                   <h2 className="font-handwritten text-4xl font-bold flex items-center gap-3">
                      <Instagram className="w-8 h-8 text-fin-red" />
                      @financeclub_bit
                   </h2>
                   <p className="font-handwritten text-xl text-zinc-500 mt-2">
                      Use hashtag <span className="font-bold text-fin-blue">#financeclub</span> to be featured
                   </p>
                </div>
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full border-2 border-zinc-900 dark:border-white transform rotate-[5deg]">
                   <Hash className="w-8 h-8" />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-zinc-100 dark:bg-zinc-800 aspect-square border-2 border-zinc-900 dark:border-zinc-700 relative group overflow-hidden cursor-pointer"
                   >
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-handwritten text-xl">
                         Image Placeholder
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
                         <p className="font-bold text-lg mb-2">{post.date}</p>
                         <p className="font-handwritten">View on Instagram</p>
                      </div>
                   </motion.div>
                ))}
             </div>

             <div className="text-center mt-12">
                <button className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white px-8 py-3 font-handwritten font-bold text-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white">
                   Load More
                </button>
             </div>
         </div>
      </section>

    </main>
  );
}
