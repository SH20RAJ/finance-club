"use client";

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareersClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      <section className="pt-20 pb-20 container mx-auto px-6 text-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
         >
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
              JOIN OUR <span className="text-fin-blue">TEAM</span>
            </h1>
               <p className="font-handwritten text-2xl text-zinc-600 mb-12">
                  Come, let&apos;s build the future of finance together.
               </p>
            <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto rotate-[1deg]">
               We&apos;re looking for passionate individuals to help us shape the future of finance at BIT Mesra.
            </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "Event Manager", type: "Leadership", desc: "Plan and execute our flagship events." },
              { role: "Content Writer", type: "Creative", desc: "Craft compelling narratives for our publications." },
              { role: "Graphic Designer", type: "Creative", desc: "Design visual assets for our brand." },
              { role: "Analyst", type: "Research", desc: "Deep dive into market trends and companies." },
              { role: "Web Developer", type: "Tech", desc: "Build and maintain our digital presence." },
              { role: "PR Executive", type: "Outreach", desc: "Manage detailed communications and partnerships." },
            ].map((job, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
                 className="bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white text-left group cursor-pointer"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-fin-blue/10 text-fin-blue border-2 border-fin-blue rounded-full">
                        <Briefcase className="w-6 h-6" />
                     </div>
                     <span className="font-handwritten font-bold text-sm bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-900 dark:border-zinc-700">{job.type}</span>
                  </div>
                  <h3 className="font-handwritten text-3xl font-bold mb-2">{job.role}</h3>
                  <p className="font-handwritten text-lg text-zinc-600 dark:text-zinc-400 mb-6">{job.desc}</p>
                  <div className="flex items-center gap-2 font-bold text-fin-blue group-hover:gap-4 transition-all">
                     Apply Now <ArrowRight className="w-5 h-5" />
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

    </main>
  );
}
