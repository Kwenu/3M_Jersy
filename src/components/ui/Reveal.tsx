import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: keyof typeof motion;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = (motion[as as keyof typeof motion] ?? motion.div) as ElementType;

  return (
    <MotionTag
      {...props}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </MotionTag>
  );
}