import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-black pt-20 border-t-4 border-zinc-900 dark:border-white">
       
       {/* Top CTA Section */}
       <div className="container px-6 mb-20 border-b-2 border-zinc-900 dark:border-zinc-800 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-fin-blue/10 dark:bg-zinc-900 p-10 border-2 border-zinc-900 dark:border-white shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white rounded-2xl rotate-[-1deg] hover:rotate-[0deg] transition-all duration-300">
             <div>
                <h3 className="font-handwritten text-4xl font-bold mb-2">Register For Our Events Now</h3>
                <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-400">Don&apos;t miss out on the action!</p>
             </div>
             <Link href="/events" className="group flex items-center gap-3 bg-fin-blue text-white px-8 py-3 rounded-full font-handwritten font-bold text-xl border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all">
                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
       </div>

       <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="font-handwritten text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                FIN<span className="text-fin-blue">PRO</span>
             </div>
             <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Where strategy meets the spirit of finance. Building the next generation of financial leaders at BIT Mesra.
             </p>
          </div>

          <div>
             <h4 className="font-handwritten font-bold text-2xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider relative inline-block">
                Quick Links
                <span className="absolute left-0 bottom-0 w-full h-1 bg-fin-yellow transform -skew-x-12"></span>
             </h4>
             <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 font-handwritten text-xl">
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
             <h4 className="font-handwritten font-bold text-2xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">Stay up to date</h4>
             <div className="space-y-6">
                <form className="flex gap-4">
                   <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white px-4 py-3 font-handwritten text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px] focus:shadow-fin-blue transition-shadow"
                   />
                   <button className="bg-fin-red text-white px-6 py-3 border-2 border-zinc-900 dark:border-white font-handwritten font-bold shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all">
                      Subscribe
                   </button>
                </form>

                <div className="text-zinc-600 dark:text-zinc-400 font-handwritten text-lg">
                   <p className="mb-2">BIT Mesra Road, Mesra, Ranchi- 835215, Jharkhand</p>
                   <p className="text-fin-blue font-bold">financeclub@bitmesra.ac.in</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                   {[Twitter, Instagram, Linkedin, Mail].map((Icon, i) => (
                      <div key={i} className="w-12 h-12 border-2 border-zinc-900 dark:border-white flex items-center justify-center hover:bg-fin-blue hover:text-white hover:rotate-[6deg] hover:shadow-[4px_4px_0px_0px] hover:shadow-zinc-900 dark:hover:shadow-white transition-all cursor-pointer bg-white dark:bg-zinc-800">
                         <Icon className="w-6 h-6" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

       </div>

       <div className="bg-zinc-900 text-white py-6 border-t-2 border-zinc-900">
          <div className="container px-6 text-center font-handwritten text-lg">
             © 2026 Finance Club BIT Mesra. Made with <span className="text-fin-red animate-pulse">♥</span> by Tech Team.
          </div>
       </div>
    </footer>
  );
}
