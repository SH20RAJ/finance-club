'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/Footer";

function InputField({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-zinc-900 dark:text-white text-lg font-handwritten font-bold mb-2">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans text-lg focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all"
       />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-zinc-900 dark:text-white text-lg font-handwritten font-bold mb-2">{label}</label>
       <textarea 
         rows={5}
         placeholder={placeholder}
         className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans text-lg focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all"
       />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />

      <section className="pt-32 pb-20 container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
         
         {/* Info Column */}
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-12"
         >
            <div>
               <h1 className="font-handwritten text-[8vw] leading-none font-bold mb-6 rotate-[-2deg]">
                  GET IN <span className="text-fin-blue underline decoration-wavy">TOUCH</span>
               </h1>
               <p className="text-zinc-600 dark:text-zinc-400 font-handwritten text-2xl rotate-[1deg]">
                  Have a query? Want to collaborate? Reach out to us.
               </p>
            </div>

            <div className="space-y-8">
               {[
                 { title: "Visit Us", content: "BIT Mesra Road, Mesra, Ranchi - 835215" },
                 { title: "Email", content: "financeclub@bitmesra.ac.in" },
                 { title: "Call", content: "+91 95469 49124" }
               ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-6 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all">
                     <h3 className="font-handwritten font-bold text-2xl mb-1 text-fin-blue">{item.title}</h3>
                     <p className="text-zinc-600 dark:text-zinc-400 font-sans">{item.content}</p>
                  </div>
               ))}
            </div>
         </motion.div>

         {/* Form Column */}
         <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-fin-blue/5 border-2 border-zinc-900 dark:border-white p-8 md:mt-12 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white"
         >
            <form className="space-y-6">
               <div className="grid grid-cols-1 gap-6">
                  <InputField label="Name" placeholder="John Doe" />
                  <InputField label="Email" type="email" placeholder="john@example.com" />
               </div>
               <InputField label="Subject" placeholder="Regarding..." />
               <TextArea label="Message" placeholder="Your message here..." />
               
               <button type="button" className="w-full bg-fin-blue text-white border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-xl py-4 hover:bg-fin-blue/90 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all">
                  Send Message
               </button>
            </form>
         </motion.div>

      </section>

      <Footer />
    </main>
  );
}
