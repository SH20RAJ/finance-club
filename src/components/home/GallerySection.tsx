"use client";

import GalleryCard from './GalleryCard';
import { motion } from 'framer-motion';

const items = [
    { 
        title: "Stock Market Sessions", 
        description: "Deep dives into technical analysis and market trends.", 
        image: "/figma_attachments/stock_session.png" 
    },
    { 
        title: "Case Study Competitions", 
        description: "Solving real-world financial problems under pressure.", 
        image: "/figma_attachments/case_study.png" 
    },
    { 
        title: "Financial Workshops", 
        description: "Hands-on learning with industry experts.", 
        image: "/figma_attachments/workshop.png" 
    },
    { 
        title: "Hackathons", 
        description: "Innovating the future of fintech.", 
        image: "/figma_attachments/hackathon.png" 
    }
];

export default function GallerySection() {
    // Duplicate items for marquee effect
    const marqueeItems = [...items, ...items];

    return (
        <section className="py-24 bg-zinc-50 dark:bg-black border-y border-zinc-200 dark:border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-fin-blue/5 pointer-events-none" />
            
            <div className="container mx-auto px-6 mb-16 relative z-10">
                 <div className="text-center">
                    <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500">
                        CAPTURING <span className="text-fin-red">MOMENTS</span>
                    </h2>
                    <p className="font-sans text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
                        Preserving the stories that shape us.
                    </p>
                </div>
            </div>

            {/* Scrolling Marquee for Desktop/Tablet */}
            <div className="relative w-full overflow-hidden">
                <motion.div 
                    className="flex gap-8 w-max px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        duration: 30, 
                        ease: "linear", 
                        repeat: Infinity 
                    }}
                >
                    {marqueeItems.map((item, i) => (
                        <div key={i} className="w-[350px] md:w-[400px] flex-shrink-0">
                            <GalleryCard 
                                title={item.title} 
                                description={item.description} 
                                image={item.image} 
                                index={i} 
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
