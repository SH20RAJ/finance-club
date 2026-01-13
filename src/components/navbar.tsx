"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        // { name: "Community", href: "/community" },
        { name: "Services", href: "/services" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-2 border-zinc-900 dark:border-white py-3 shadow-[0_4px_0_0_rgba(0,0,0,1)] dark:shadow-[0_4px_0_0_rgba(255,255,255,1)]"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-handwritten font-bold text-3xl tracking-tighter hover:-rotate-2 transition-transform">
                    FIN<span className="text-fin-blue">STREET</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-handwritten text-xl font-bold text-zinc-600 dark:text-zinc-300 hover:text-fin-blue dark:hover:text-fin-blue transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-fin-blue transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/join">
                        <Button className="font-handwritten font-bold text-lg bg-fin-blue text-white border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px] transition-all">
                            Join Club
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-black fixed inset-0 z-40 pt-24 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-handwritten text-4xl font-bold text-zinc-900 dark:text-white hover:text-fin-blue transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/join" onClick={() => setIsOpen(false)}>
                                <Button className="mt-4 font-handwritten font-bold text-2xl px-12 py-6 bg-fin-red text-white border-2 border-zinc-900 dark:border-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white">
                                    Join Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
