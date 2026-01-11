"use client";

import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Home, Info, Calendar, BarChart3, Newspaper, Menu } from "lucide-react";

export const Navbar = () => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <FloatingDock
                items={[
                    { title: "Home", icon: <Home className="h-full w-full" />, href: "/" },
                    { title: "About", icon: <Info className="h-full w-full" />, href: "#about" },
                    { title: "Events", icon: <Calendar className="h-full w-full" />, href: "#events" },
                    { title: "Research", icon: <BarChart3 className="h-full w-full" />, href: "#research" },
                    { title: "News", icon: <Newspaper className="h-full w-full" />, href: "#news" },
                ]}
            />
        </div>
    );
};

const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className="h-10 w-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-12 w-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-primary hover:bg-white/5 transition-colors"
            >
                <Menu className="h-5 w-5" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 px-4 pb-3",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const iconScale = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
    const iconScaleSpring = useSpring(iconScale, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-background border border-white/10 flex items-center justify-center relative shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(252,211,77,0.3)] hover:border-primary/50 transition-shadow"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-background border border-white/10 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs text-primary font-mono uppercase tracking-widest hidden md:block"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ scale: iconScaleSpring }}
                    className="flex items-center justify-center text-muted-foreground w-full h-full p-2.5 hover:text-primary transition-colors"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
