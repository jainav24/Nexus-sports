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
      
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 sm:left-10 z-50 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-colors flex items-center justify-center border border-white/20"
        aria-label="Previous"
      >
        <ArrowLeft size={24} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 sm:right-10 z-50 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-colors flex items-center justify-center border border-white/20"
        aria-label="Next"
      >
        <ArrowRight size={24} />
      </button>

      <div className="relative w-full max-w-[280px] sm:max-w-[340px] h-[400px] sm:h-[480px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const distance = index - currentIndex;
            
            // Handle wrapping for infinite feel (optional, but let's keep it simple with fixed distances)
            // If distance > half of items, maybe wrap it. 
            // For now, let's just use raw distance.
            let adjustedDistance = distance;
            
            if (Math.abs(distance) > Math.floor(items.length / 2)) {
               if (distance > 0) {
                 adjustedDistance = distance - items.length;
               } else {
                 adjustedDistance = distance + items.length;
               }
            }

            const isActive = adjustedDistance === 0;
            const isLeft = adjustedDistance < 0;
            const isRight = adjustedDistance > 0;
            const absDistance = Math.abs(adjustedDistance);

            // Calculate styles based on distance
            let translateX = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 10 - absDistance;
            let opacity = 1;

            if (isActive) {
              translateX = 0;
              rotateY = 0;
              scale = 1;
              opacity = 1;
            } else {
              // Adjust these values to match the screenshot's depth and spacing
              translateX = isLeft ? -50 - (absDistance * 30) : 50 + (absDistance * 30);
              rotateY = isLeft ? 35 + (absDistance * 5) : -35 - (absDistance * 5);
              scale = 1 - (absDistance * 0.15);
              opacity = 1 - (absDistance * 0.2);
              
              if (absDistance > 3) {
                 opacity = 0; // Hide elements too far away
              }
            }

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: `${translateX}%`,
                  rotateY: rotateY,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                style={{ transformOrigin: 'center center' }}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
              >
                <div className="relative w-full h-full bg-card group">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                  
                  {/* Content */}
                  <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mb-2">
                      <span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none mb-3">
                      {item.name.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < item.name.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 max-w-[90%]">
                      {item.description}
                    </p>
                    <Link 
                      to={`/product/${item.id}`}
                      className="text-white font-bold text-sm tracking-wider uppercase flex items-center hover:text-primary transition-colors w-max"
                    >
                      Explore <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoverflowCarousel;
