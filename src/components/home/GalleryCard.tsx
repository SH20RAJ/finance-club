"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface GalleryCardProps {
    title: string;
    description: string;
    image: string;
    index: number;
}

export default function GalleryCard({ title, description, image, index }: GalleryCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
            className="group relative bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-4 shadow-[8px_8px_0px_0px] shadow-zinc-900 dark:shadow-white"
        >
            <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden border-2 border-zinc-900 dark:border-white">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
            </div>
            
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-handwritten text-2xl font-bold mb-2 group-hover:text-fin-blue transition-colors">
                        {title}
                    </h3>
                    <p className="font-handwritten text-zinc-600 dark:text-zinc-400 text-sm">
                        {description}
                    </p>
                </div>
                <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
        </motion.div>
    );
};
