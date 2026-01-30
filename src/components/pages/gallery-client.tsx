'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Reveal } from "@/components/ui/reveal";

const galleryItems = [
    { src: "/figma_attachments/stock_session.png", title: "Stock Strategy Session", category: "Workshop", size: "large" },
    { src: "/figma_attachments/case_study.png", title: "Case Study 2024", category: "Competition", size: "small" },
    { src: "/figma_attachments/workshop.png", title: "Financial Modeling", category: "Workshop", size: "tall" },
    { src: "/figma_attachments/hackathon.png", title: "Fintech Hackathon", category: "Event", size: "small" },
    { src: "/figma_attachments/stock_session.png", title: "Guest Speaker: Zeroodha", category: "Seminar", size: "large" },
    { src: "/figma_attachments/case_study.png", title: "Annual Meetup", category: "Community", size: "tall" },
];

export default function GalleryClient() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24 pb-24 relative overflow-hidden">
            
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fin-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <Reveal variant="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fin-blue/20 bg-fin-blue/5 mb-8">
                            <Sparkles className="w-4 h-4 text-fin-blue" />
                            <span className="font-sans font-medium text-sm text-fin-blue tracking-wide uppercase">Our Moments</span>
                        </div>
                        <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                           CAPTURING <span className="text-fin-blue">MEMORIES</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                            A visual journey through the events, workshops, and milestones that define our community.
                        </p>
                    </Reveal>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                    {galleryItems.map((item, i) => (
                        <Reveal key={i} variant="fade-up" delay={i * 0.1}>
                            <motion.div 
                                className={`relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group border border-zinc-200 dark:border-white/10 ${item.size === 'large' ? 'md:col-span-2' : ''} ${item.size === 'tall' ? 'row-span-2' : ''}`}
                                whileHover={{ scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Image Placeholder (Gradient for now if image missing) */}
                                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800" />
                                <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 bg-fin-blue/90 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        View Details <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </main>
    );
}
