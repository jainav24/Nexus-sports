import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoverflowCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full py-10 flex items-center justify-center min-h-[500px] sm:min-h-[600px] overflow-hidden" style={{ perspective: '1000px' }}>

      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-10 z-50 w-11 h-11 bg-white/90 hover:bg-white backdrop-blur-md text-heading/50 hover:text-heading rounded-full transition-all duration-300 flex items-center justify-center shadow-md border border-black/[0.04]"
        aria-label="Previous"
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-10 z-50 w-11 h-11 bg-white/90 hover:bg-white backdrop-blur-md text-heading/50 hover:text-heading rounded-full transition-all duration-300 flex items-center justify-center shadow-md border border-black/[0.04]"
        aria-label="Next"
      >
        <ArrowRight size={18} strokeWidth={1.5} />
      </button>

      <div className="relative w-full max-w-[280px] sm:max-w-[340px] h-[400px] sm:h-[480px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const distance = index - currentIndex;
            let adjustedDistance = distance;

            if (Math.abs(distance) > Math.floor(items.length / 2)) {
              if (distance > 0) adjustedDistance = distance - items.length;
              else adjustedDistance = distance + items.length;
            }

            const isActive = adjustedDistance === 0;
            const isLeft = adjustedDistance < 0;
            const absDistance = Math.abs(adjustedDistance);

            let translateX = 0, rotateY = 0, scale = 1, zIndex = 10 - absDistance, opacity = 1;

            if (isActive) {
              translateX = 0; rotateY = 0; scale = 1; opacity = 1;
            } else {
              translateX = isLeft ? -50 - (absDistance * 30) : 50 + (absDistance * 30);
              rotateY = isLeft ? 35 + (absDistance * 5) : -35 - (absDistance * 5);
              scale = 1 - (absDistance * 0.15);
              opacity = 1 - (absDistance * 0.25);
              if (absDistance > 3) opacity = 0;
            }

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{ x: `${translateX}%`, rotateY, scale, zIndex, opacity }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 28 }}
                className="absolute w-full h-full rounded-2xl overflow-hidden cursor-pointer shadow-elevated"
                style={{ transformOrigin: 'center center' }}
                onClick={() => { if (!isActive) setCurrentIndex(index); }}
              >
                <div className="relative w-full h-full bg-surface-2 group">
                  <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                  <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mb-2.5">
                      <span className="inline-block bg-primary text-white text-[10px] font-semibold px-2.5 py-1 uppercase rounded-full tracking-wider shadow-sm">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-white font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-3 drop-shadow-md">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-5 max-w-[90%] line-clamp-2">
                      {item.description}
                    </p>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-white/90 hover:text-white font-medium text-xs tracking-wider uppercase flex items-center w-max transition-colors duration-300"
                    >
                      View Details <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-heading/15 hover:bg-heading/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverflowCarousel;
