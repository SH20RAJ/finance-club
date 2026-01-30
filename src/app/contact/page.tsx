'use client';

import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { Reveal } from "@/components/ui/reveal";

function InputField({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-zinc-600 dark:text-zinc-400 text-sm font-sans font-medium mb-2 uppercase tracking-wider">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-4 rounded-xl font-sans text-lg focus:outline-none focus:border-fin-blue focus:ring-1 focus:ring-fin-blue/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
       />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string, placeholder?: string }) {
  return (
    <div className="group relative">
       <label className="block text-zinc-600 dark:text-zinc-400 text-sm font-sans font-medium mb-2 uppercase tracking-wider">{label}</label>
       <textarea 
         rows={5}
         placeholder={placeholder}
         className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-4 rounded-xl font-sans text-lg focus:outline-none focus:border-fin-blue focus:ring-1 focus:ring-fin-blue/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
       />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-fin-blue/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fin-indigo/10 rounded-full blur-[120px]" />
      </div>

      <section className="pt-32 pb-20 container px-6 mx-auto relative z-10">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Column */}
            <div className="space-y-12">
               <Reveal variant="fade-up">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fin-blue/20 bg-fin-blue/5 mb-8">
                        <Sparkles className="w-4 h-4 text-fin-blue" />
                        <span className="font-sans font-medium text-sm text-fin-blue tracking-wide uppercase">Contact Us</span>
                    </div>
                  <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                     GET IN <span className="text-fin-blue">TOUCH</span>
                  </h1>
                  <p className="text-zinc-600 dark:text-zinc-400 font-sans text-xl leading-relaxed max-w-lg">
                     Have a query? Want to collaborate? Reach out to us and let&apos;s build something financial together.
                  </p>
               </Reveal>

               <div className="space-y-6">
                  {[
                    { title: "Visit Us", content: "BIT Mesra Road, Mesra, Ranchi - 835215", icon: MapPin },
                    { title: "Email", content: "financeclub@bitmesra.ac.in", icon: Mail },
                    { title: "Call", content: "+91 95469 49124", icon: Phone }
                  ].map((item, i) => (
                     <Reveal key={i} variant="fade-up" delay={i * 0.1}>
                         <div className="group bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors flex items-start gap-4">
                            <div className="p-3 bg-fin-blue/10 rounded-xl text-fin-blue group-hover:bg-fin-blue group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl mb-1 text-zinc-900 dark:text-white">{item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 font-sans">{item.content}</p>
                            </div>
                         </div>
                     </Reveal>
                  ))}
               </div>
            </div>

            {/* Form Column */}
            <Reveal variant="fade-up" delay={0.2}>
                <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fin-blue to-fin-indigo" />
                   
                   <form className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <InputField label="Name" placeholder="John Doe" />
                         <InputField label="Email" type="email" placeholder="john@example.com" />
                      </div>
                      <InputField label="Subject" placeholder="Regarding..." />
                      <TextArea label="Message" placeholder="Your message here..." />
                      
                      <button type="button" className="w-full bg-gradient-to-r from-fin-blue to-fin-indigo text-white font-sans font-bold text-lg py-4 rounded-xl hover:shadow-lg hover:shadow-fin-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                         Send Message <Send className="w-5 h-5" />
                      </button>
                   </form>
                </div>
            </Reveal>

         </div>

      </section>

    </main>
  );
}
