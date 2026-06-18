import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ToastContainer = () => {
  const { toasts, removeToast } = useAppContext();

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
            className="bg-white/95 backdrop-blur-xl border border-black/[0.06] shadow-elevated rounded-xl px-4 py-3.5 flex items-center gap-3 pointer-events-auto min-w-[260px] relative"
          >
            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={15} className="text-green-600" />
            </div>
            <span className="text-heading text-sm font-medium pr-6">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="absolute right-3 text-muted/50 hover:text-heading transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
