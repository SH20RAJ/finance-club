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
        <section className="py-24 bg-fin-blue/10 border-y-2 border-zinc-900 dark:border-white overflow-hidden">
            
            <div className="container mx-auto px-6 mb-16 relative">
                 <div className="text-center">
                    <h2 className="font-handwritten text-5xl md:text-7xl font-bold mb-6 rotate-[-2deg]">
                        CAPTURING <span className="text-fin-red">MOMENTS</span>
                    </h2>
                    <p className="font-handwritten text-2xl text-zinc-600 dark:text-zinc-400 rotate-[1deg]">
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
