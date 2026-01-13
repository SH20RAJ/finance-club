'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white px-6 py-3 rounded-full flex items-center justify-between gap-8 shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white w-full max-w-5xl">
           {/* Logo */}
           <Link href="/" className="font-handwritten font-bold text-2xl tracking-tighter text-zinc-900 dark:text-white hover:rotate-[-2deg] transition-transform">
              FIN<span className="text-fin-blue">PRO</span>
           </Link>

           {/* Desktop Links */}
           <ul className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                   <Link 
                     href={link.href} 
                     className="font-handwritten text-lg font-bold text-zinc-600 dark:text-zinc-300 hover:text-fin-blue dark:hover:text-fin-blue transition-colors relative group"
                   >
                     {link.name}
                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-fin-blue transition-all group-hover:w-full"></span>
                   </Link>
                </li>
              ))}
           </ul>

           {/* CTA & Mobile Toggle */}
           <div className="flex items-center gap-4">
              <Link 
                 href="/join"
                 className="hidden md:block bg-fin-blue text-white border-2 border-zinc-900 dark:border-white px-6 py-2 rounded-full font-handwritten font-bold text-lg hover:bg-fin-blue/90 hover:shadow-[2px_2px_0px_0px] hover:shadow-zinc-900 dark:hover:shadow-white transition-all transform hover:-translate-y-0.5"
              >
                 Join Us
              </Link>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
           </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm md:hidden pt-32 px-6"
          >
             <ul className="flex flex-col items-center gap-8">
                {links.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                     <Link 
                       href={link.href} 
                       onClick={() => setIsOpen(false)}
                       className="font-handwritten text-4xl font-bold text-zinc-900 dark:text-white hover:text-fin-blue transition-colors"
                     >
                       {link.name}
                     </Link>
                  </motion.li>
                ))}
                <motion.li
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                >
                   <Link 
                      href="/join"
                      onClick={() => setIsOpen(false)}
                      className="inline-block mt-4 bg-fin-blue text-white border-2 border-zinc-900 dark:border-white px-8 py-3 rounded-full font-handwritten font-bold text-2xl shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white"
                   >
                      Join Us
                   </Link>
                </motion.li>
             </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
