import React from 'react';
import { motion } from 'framer-motion';

export const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card">
      <div className="aspect-[4/5] bg-surface-2 relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="h-3 bg-surface-2 rounded-full w-1/3 overflow-hidden relative">
          <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />
        </div>
        <div className="h-4 bg-surface-2 rounded-full w-3/4 overflow-hidden relative">
          <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-4 bg-surface-2 rounded-full w-1/4 overflow-hidden relative">
            <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="h-80 rounded-2xl bg-surface-2 overflow-hidden relative shadow-card">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent"
      />
    </div>
  );
};
