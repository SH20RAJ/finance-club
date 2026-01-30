'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMargin = () => {
      const mainContent = document.getElementById('main-content');
      if (mainContent && footerRef.current) {
         mainContent.style.marginBottom = `${footerRef.current.offsetHeight}px`;
      }
    };

    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  return (
    <footer ref={footerRef} className="fixed bottom-0 left-0 w-full z-0 bg-white/50 dark:bg-[#0a0a0f] pt-20 border-t border-white/10">
       
       {/* Top CTA Section */}
       <div className="container px-6 mb-20 border-b border-white/5 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-fin-blue/10 to-fin-dark/50 p-10 border border-white/10 rounded-3xl -rotate-1 hover:rotate-0 transition-all duration-300 backdrop-blur-3xl shadow-2xl">
             <div>
                <h3 className="font-handwritten text-4xl font-bold mb-2">Register For Our Events Now</h3>
                <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-400">Don&apos;t miss out on the action!</p>
             </div>
             <Link href="/events" className="group flex items-center gap-3 bg-fin-blue text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg shadow-fin-blue/30 hover:shadow-fin-blue/50 hover:scale-105 transition-all">
                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
       </div>

       <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="font-heading font-black text-5xl text-zinc-900 dark:text-white mb-6">
                FIN<span className="text-fin-blue">PRO</span>
             </div>
             <p className="font-medium text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Where strategy meets the spirit of finance. Building the next generation of financial leaders at BIT Mesra.
             </p>
          </div>

          <div>
             <h4 className="font-bold text-xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider relative inline-block">
                Quick Links
                <span className="absolute left-0 bottom-0 w-1/2 h-1 bg-gradient-to-r from-fin-blue to-transparent rounded-full"></span>
             </h4>
             <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                {['Home', 'About', 'Events', 'Gallery', 'Careers'].map((item) => (
                  <li key={item}>
                     <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-fin-blue hover:translate-x-2 inline-block transition-all">
                        {item}
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-bold text-xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">Stay up to date</h4>
             <div className="space-y-6">
                <form className="flex gap-4">
                   <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-3 rounded-xl font-medium text-lg focus:outline-none focus:ring-2 focus:ring-fin-blue transition-all"
                   />
                   <button className="bg-fin-red text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-fin-red/30 hover:shadow-fin-red/50 hover:-translate-y-0.5 transition-all">
                      Subscribe
                   </button>
                </form>

                <div className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                   <p className="mb-2">BIT Mesra Road, Mesra, Ranchi- 835215, Jharkhand</p>
                   <p className="text-fin-blue font-bold">financeclub@bitmesra.ac.in</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                   {[Twitter, Instagram, Linkedin, Mail].map((Icon, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-fin-blue hover:text-white hover:shadow-lg hover:shadow-fin-blue/40 transition-all cursor-pointer bg-white dark:bg-white/5">
                         <Icon className="w-6 h-6" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

       </div>

       <div className="bg-white/50 dark:bg-black py-6 border-t border-zinc-200 dark:border-white/5">
          <div className="container px-6 text-center font-medium text-sm text-zinc-500 dark:text-zinc-600">
             © 2026 Finance Club BIT Mesra. Made with <span className="text-fin-red animate-pulse">♥</span> by Tech Team.
          </div>
       </div>
    </footer>
  );
}
