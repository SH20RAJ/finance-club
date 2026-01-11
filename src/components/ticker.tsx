"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TickerProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export const Ticker = ({
    items,
    direction = "left",
    speed = 20,
    className,
}: TickerProps) => {
    return (
        <div className={cn("relative flex overflow-hidden w-full bg-secondary/5 border-y border-white/5 backdrop-blur-sm", className)}>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <motion.div
                className="flex whitespace-nowrap py-3 font-mono text-sm tracking-widest uppercase text-muted-foreground"
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...items, ...items, ...items].map((item, idx) => (
                    <span key={idx} className="mx-8 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
