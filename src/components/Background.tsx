import { motion } from 'framer-motion';

export function Background() {
  return (
    <>
      {/* Grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      
      {/* Animated glow orbs */}
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none z-0 bg-accent-cyan"
        style={{ top: '-200px', right: '-200px' }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none z-0 bg-accent-violet"
        style={{ bottom: '-200px', left: '-200px' }}
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
