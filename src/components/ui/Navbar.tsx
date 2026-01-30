'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-120%", opacity: 0 },
  };

  return (
    <>
      <motion.nav 
        variants={variants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto bg-white/5 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex items-center justify-between gap-12 shadow-2xl shadow-black/20 w-full max-w-5xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-[#13131f]/90">
           
           {/* LOGO */}
           <Link href="/" className="relative group">
              <div className="font-heading font-black text-2xl tracking-tighter text-zinc-900 dark:text-white flex items-center gap-1 group-hover:scale-105 transition-transform origin-left">
                 FIN<span className="text-fin-blue">PRO</span>
              </div>
           </Link>

           {/* Desktop Links */}
           <ul className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                   <Link 
                     href={link.href} 
                     className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative"
                   >
                     {link.name}
                   </Link>
                </li>
              ))}
           </ul>

           {/* CTA & Mobile Toggle */}
           <div className="flex items-center gap-4">
              <Link 
                 href="/join"
                 className="hidden md:block relative overflow-hidden bg-fin-blue text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg shadow-fin-blue/25 group"
              >
                 <span className="relative z-10 flex items-center gap-2">
                    Join Us
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle Menu"
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
