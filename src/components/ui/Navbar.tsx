'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="glass px-8 py-4 rounded-full flex items-center gap-12">
         {/* Logo Placeholder */}
         <div className="font-heading font-bold text-xl tracking-tighter text-white">
            FIN<span className="text-fin-blue">PRO</span>
         </div>

         {/* Links */}
         <ul className="flex items-center gap-8 hidden md:flex">
            {links.map((link) => (
              <li key={link.name}>
                 <Link 
                   href={link.href} 
                   className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
                 >
                   {link.name}
                 </Link>
              </li>
            ))}
         </ul>

         {/* CTA */}
         <Link 
            href="/join"
            className="bg-fin-blue hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-sans font-bold text-sm transition-transform hover:scale-105"
         >
            Join Us
         </Link>
      </div>
    </motion.nav>
  );
}
