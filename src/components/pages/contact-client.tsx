"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function InputField({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label className="font-handwritten text-xl font-bold ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans text-lg focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all"
      />
    </div>
  );
}

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">

      <section className="pt-32 pb-20 container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
         
         {/* Contact Info */}
         <div className="space-y-12">
            <div>
              <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
                GET IN <span className="text-fin-blue">TOUCH</span>
              </h1>
              <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 rotate-[1deg]">
                 Have a question? Want to collaborate? Drop us a line.
              </p>
            </div>

            <div className="space-y-6">
               {[
                 { icon: <Mail className="w-6 h-6" />, text: "financeclub@bitmesra.ac.in", label: "Email Us" },
                 { icon: <Phone className="w-6 h-6" />, text: "+91 99999 99999", label: "Call Us" },
                 { icon: <MapPin className="w-6 h-6" />, text: "BIT Mesra Campus, Ranchi", label: "Visit Us" },
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 5, rotate: -1 }}
                   className="flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white"
                 >
                    <div className="p-3 bg-fin-blue text-white border-2 border-zinc-900 dark:border-white rounded-none">
                       {item.icon}
                    </div>
                    <div>
                       <div className="font-handwritten font-bold text-sm text-zinc-500 uppercase tracking-wider">{item.label}</div>
                       <div className="font-sans text-lg font-bold">{item.text}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>

         {/* Form */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white dark:bg-zinc-900 p-8 md:p-12 border-2 border-zinc-900 dark:border-white shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white h-fit rotate-[1deg]"
         >
            <form className="space-y-6">
               <InputField label="Your Name" placeholder="John Doe" />
               <InputField label="Email Address" type="email" placeholder="john@example.com" />
               
               <div className="space-y-2">
                  <label className="font-handwritten text-xl font-bold ml-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white p-4 font-sans text-lg focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
               </div>

               <button className="w-full bg-fin-blue text-white border-2 border-zinc-900 dark:border-white font-handwritten font-bold text-xl py-4 hover:bg-fin-blue/90 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
               </button>
            </form>
         </motion.div>

      </section>

    </main>
  );
}
