import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          className="text-4xl font-display font-bold tracking-tight uppercase flex items-center gap-1.5 mb-10"
        >
          <span className="text-gradient">Nexus</span>
          <span className="font-light text-heading/60">Sports</span>
        </motion.div>

        <div className="w-48 h-[2px] bg-black/[0.05] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
