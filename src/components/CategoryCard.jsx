import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-56 sm:h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-shadow duration-500"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/products?category=${category.name.toLowerCase()}`}>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-700 group-hover:from-black/50" />

        <motion.img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 p-4 sm:p-7 flex flex-col justify-end">
          <motion.h3
            className="text-white font-display text-xl sm:text-2xl font-bold uppercase tracking-tight mb-1 drop-shadow-lg"
            animate={{ y: isHovered ? -6 : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {category.name}
          </motion.h3>
          <div
            className="flex items-center text-white/80 font-medium tracking-wide text-[10px] sm:text-xs transition-all duration-400 opacity-100 h-auto md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          >
            Explore <ArrowRight size={12} className="ml-1.5 sm:w-3.5 sm:h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
