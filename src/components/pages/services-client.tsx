"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Wallet, PieChart } from 'lucide-react';

export default function ServicesClient() {
  const services = [
     { 
       title: "Corporate Strategy", 
       desc: "Analyze business models, competitive landscapes, and growth strategies. Learn how top firms make decisions.",
       icon: <TrendingUp className="w-8 h-8" />,
       color: "bg-fin-blue",
       activities: ["Case Competitions", "Consulting Workshops", "Industry Analysis"]
     },
     { 
       title: "Personal Finance", 
       desc: "Master the art of budgeting, investing, and retirement planning. Secure your financial future starting today.",
       icon: <Wallet className="w-8 h-8" />,
       color: "bg-fin-red",
       activities: ["Budgeting 101", "Stock Market Basics", "Portfolio Management"]
     },
     { 
       title: "Investments", 
       desc: "Deep dive into equities, derivatives, and alternative assets. Understand risk and return dynamics.",
       icon: <PieChart className="w-8 h-8" />,
       color: "bg-amber-400",
       activities: ["Live Trading", "Technical Analysis", "Fundamental Research"]
     }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      <section className="pt-20 pb-20 container mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
         >
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 rotate-[-2deg]">
              WHAT WE <span className="text-fin-blue underline decoration-wavy decoration-2">OFFER</span>
            </h1>
            <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto rotate-[1deg]">
               Comprehensive learning tracks designed to turn beginners into financial experts.
            </p>
         </motion.div>

         <div className="space-y-16">
            {services.map((service, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
               >
                  <div className="flex-1">
                     <div className={`w-fit p-4 ${service.color} border-2 border-zinc-900 dark:border-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white mb-6 rotate-[-2deg]`}>
                        {service.icon}
                     </div>
                     <h2 className="font-handwritten text-5xl font-bold mb-6">{service.title}</h2>
                     <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                        {service.desc}
                     </p>
                     
                     <div className="space-y-4">
                        <h4 className="font-bold text-lg uppercase tracking-wider text-zinc-500">Key Activities</h4>
                        <ul className="space-y-3">
                           {service.activities.map((activity, j) => (
                              <li key={j} className="flex items-center gap-3 font-handwritten text-xl">
                                 <div className="w-2 h-2 bg-zinc-900 dark:bg-white rounded-full"></div>
                                 {activity}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                     <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white flex items-center justify-center p-8 group hover:shadow-[12px_12px_0px_0px] transition-all cursor-pointer">
                        <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                           <p className="font-handwritten text-2xl rotate-[-2deg]">Image Placeholder for</p>
                           <p className="font-bold text-3xl mt-2">{service.title}</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

      </section>

    </main>
  );
}
