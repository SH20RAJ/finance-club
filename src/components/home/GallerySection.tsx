'use client';

import { motion } from 'framer-motion';

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative bg-fin-dark">
       <div className="container px-6">
          <div className="mb-20 text-center">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="font-heading text-[6vw] leading-none font-bold text-white mb-4"
             >
                CAPTURING MOMENTS
             </motion.h2>
             <p className="font-sans text-xl text-fin-blue tracking-widest uppercase">Preserving Stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
             
             {/* Large Item */}
             <motion.div 
               whileHover={{ scale: 0.98 }}
               className="md:col-span-2 md:row-span-2 bg-neutral-800 rounded-2xl overflow-hidden relative group"
             >
                <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Placeholder */}
                <div className="absolute bottom-0 left-0 p-8">
                   <span className="text-white font-heading text-2xl">Main Event</span>
                </div>
             </motion.div>

             {/* Small Items */}
             <motion.div className="bg-neutral-800 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gray-800" />
             </motion.div>
             <motion.div className="bg-neutral-800 rounded-2xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gray-800" />
             </motion.div>

             {/* Medium Item */}
             <motion.div className="md:col-span-2 bg-neutral-800 rounded-2xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gray-800" />
             </motion.div>

          </div>
       </div>
    </section>
  );
}
