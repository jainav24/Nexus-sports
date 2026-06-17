import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="text-4xl font-bold tracking-tighter text-white uppercase flex items-center gap-2 mb-8">
          <span className="text-primary">Nexus</span> Sports
        </div>
        
        {/* Animated Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-400 text-sm tracking-widest uppercase"
        >
          Loading Champions Experience...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
