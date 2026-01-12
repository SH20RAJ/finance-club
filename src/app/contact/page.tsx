'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/layout/Footer";

function InputField({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-fin-blue text-xs font-bold uppercase tracking-widest mb-2">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-fin-blue transition-colors"
       />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-fin-blue text-xs font-bold uppercase tracking-widest mb-2">{label}</label>
       <textarea 
         rows={5}
         placeholder={placeholder}
         className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-fin-blue transition-colors"
       />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-fin-dark text-white">
      <Navbar />

      <section className="pt-32 pb-20 container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
         
         {/* Info Column */}
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-12"
         >
            <div>
               <h1 className="font-heading text-6xl font-bold mb-6">GET IN <span className="text-fin-blue">TOUCH</span></h1>
               <p className="text-white/60 font-sans text-lg">
                  Have a query? Want to collaborate? Reach out to us.
               </p>
            </div>

            <div className="space-y-8">
               <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-white/60 text-sm">BIT Mesra Road, Mesra, Ranchi - 835215</p>
               </div>
               <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-white/60 text-sm">financeclub@bitmesra.ac.in</p>
               </div>
               <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">Call</h3>
                  <p className="text-white/60 text-sm">+91 95469 49124</p>
               </div>
            </div>
         </motion.div>

         {/* Form Column */}
         <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="glass p-8 rounded-2xl md:mt-12"
         >
            <form className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                  <InputField label="Name" placeholder="John Doe" />
                  <InputField label="Email" type="email" placeholder="john@example.com" />
               </div>
               <InputField label="Subject" placeholder="Regarding..." />
               <TextArea label="Message" placeholder="Your message here..." />
               
               <button type="button" className="w-full bg-fin-blue hover:bg-opacity-90 text-white font-bold py-4 rounded-md uppercase tracking-widest transition-transform hover:scale-[1.02]">
                  Send Message
               </button>
            </form>
         </motion.div>

      </section>

      <Footer />
    </main>
  );
}
