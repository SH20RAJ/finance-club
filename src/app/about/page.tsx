'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-fin-dark text-white selection:bg-fin-blue selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-fin-dark">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fin-blue/5 rounded-full blur-[100px]" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-[10vw] leading-none font-bold text-center z-10"
        >
          WHO WE <span className="text-fin-blue">ARE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-center text-white/60 font-sans text-lg mt-8 px-6 z-10"
        >
          The Finance Club of BIT Mesra is a student-run organization dedicated to fostering financial literacy and cultivating the next generation of financial leaders.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-2xl relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-fin-blue/10 rounded-full blur-[50px] group-hover:bg-fin-blue/20 transition-all" />
           <h3 className="font-heading text-4xl font-bold mb-6 text-fin-blue">OUR MISSION</h3>
           <p className="font-sans text-lg text-white/80 leading-relaxed">
             To bridge the gap between theoretical knowledge and practical application in the world of finance. We aim to provide a platform for students to learn, experiment, and grow.
           </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-2xl relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-fin-red/10 rounded-full blur-[50px] group-hover:bg-fin-red/20 transition-all" />
           <h3 className="font-heading text-4xl font-bold mb-6 text-fin-red">OUR VISION</h3>
           <p className="font-sans text-lg text-white/80 leading-relaxed">
             To be the premier hub for financial education and distinct leadership, empowering students to make informed financial decisions and excel in their careers.
           </p>
        </motion.div>

      </section>

      {/* Stats / History Wrapper */}
      <section className="py-24 bg-neutral-900 overflow-hidden">
         <div className="container mx-auto px-6">
            <h2 className="font-heading text-[5vw] font-bold text-white/10 text-center mb-16 uppercase">
               Since 2012
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { label: "Members", value: "500+" },
                 { label: "Events", value: "100+" },
                 { label: "Speakers", value: "50+" },
                 { label: "Years", value: "12+" },
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ scale: 0.5, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                 >
                    <div className="text-4xl md:text-6xl font-heading font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-fin-blue font-sans font-bold uppercase tracking-widest">{stat.label}</div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
