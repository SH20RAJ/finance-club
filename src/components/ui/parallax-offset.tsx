'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOffsetProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxOffset = ({ children, offset = 50, className = "" }: ParallaxOffsetProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};
