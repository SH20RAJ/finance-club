import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 pt-20 pb-10 border-t-2 border-zinc-900 dark:border-white">
       <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="font-handwritten text-4xl font-bold text-zinc-900 dark:text-white mb-6 rotate-[-2deg]">
                FIN<span className="text-fin-blue">PRO</span>
             </div>
             <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-400 rotate-[1deg]">
                Where strategy meets the spirit of finance. <br/>
                <span className="font-bold text-fin-red">Create. Invest. Grow.</span>
             </p>
          </div>

          <div>
             <h4 className="font-handwritten font-bold text-2xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">Quick Links</h4>
             <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 font-handwritten text-xl">
                <li><Link href="/" className="hover:text-fin-blue hover:underline decoration-wavy transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-fin-blue hover:underline decoration-wavy transition-colors">About</Link></li>
                <li><Link href="/events" className="hover:text-fin-blue hover:underline decoration-wavy transition-colors">Events</Link></li>
                <li><Link href="/gallery" className="hover:text-fin-blue hover:underline decoration-wavy transition-colors">Gallery</Link></li>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-handwritten font-bold text-2xl text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">Contact Us</h4>
             <div className="space-y-4 text-zinc-600 dark:text-zinc-400 font-handwritten text-xl">
                <p>BIT Mesra Road, Mesra, Ranchi- 835215, Jharkhand, India</p>
                <p>+91 95469 49124</p>
                <p className="text-fin-blue font-bold">financeclub@bitmesra.ac.in</p>
                
                <div className="flex gap-4 mt-6">
                   {[Twitter, Instagram, Linkedin, Mail].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 border-2 border-zinc-900 dark:border-white flex items-center justify-center hover:bg-fin-blue hover:text-white hover:shadow-[4px_4px_0px_0px] hover:shadow-zinc-900 dark:hover:shadow-white transition-all cursor-pointer">
                         <Icon className="w-5 h-5" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

       </div>

       <div className="container px-6 pt-8 border-t-2 border-zinc-900 dark:border-white/20 text-center">
          <p className="font-handwritten text-zinc-500 dark:text-zinc-500 text-lg">
             © 2026 Finance Club BIT Mesra. Made with <span className="text-red-500">♥</span> by Tech Team.
          </p>
       </div>
    </footer>
  );
}
