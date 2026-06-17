import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ToastContainer = () => {
  const { toasts, removeToast } = useAppContext();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card border border-white/10 shadow-2xl rounded-sm p-4 flex items-center gap-3 pointer-events-auto min-w-[280px]"
          >
            <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
            <span className="text-white text-sm font-medium pr-6">{toast.message}</span>
            <button 
              onClick={() => removeToast(toast.id)}
              className="absolute right-3 text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
