'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/layout/Footer";

const photos = [
  { id: 1, size: 'large', color: 'bg-neutral-800' },
  { id: 2, size: 'small', color: 'bg-neutral-700' },
  { id: 3, size: 'small', color: 'bg-neutral-900' },
  { id: 4, size: 'wide', color: 'bg-neutral-800' },
  { id: 5, size: 'small', color: 'bg-neutral-700' },
  { id: 6, size: 'large', color: 'bg-neutral-900' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-fin-dark text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 container px-6 mx-auto">
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="text-center mb-16"
         >
            <h1 className="font-heading text-[10vw] font-bold leading-none text-white/5 absolute top-20 left-0 right-0 pointer-events-none select-none">
               GALLERY
            </h1>
            <h2 className="relative font-heading text-4xl font-bold text-white z-10">
               VISUAL <span className="text-fin-blue">STORIES</span>
            </h2>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
            {photos.map((photo, i) => (
               <motion.div
                 key={photo.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ scale: 0.98 }}
                 className={`rounded-2xl overflow-hidden relative group cursor-pointer ${
                    photo.size === 'large' ? 'md:col-span-1 md:row-span-2' :
                    photo.size === 'wide' ? 'md:col-span-2' : ''
                 } ${photo.color}`}
               >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                     <span className="font-heading font-bold text-white text-lg tracking-widest">VIEW</span>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}
