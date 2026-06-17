import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-56 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/products?category=${category.name.toLowerCase()}`}>
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20" />
        <motion.img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 p-4 sm:p-8 flex flex-col justify-end">
          <motion.h3 
            className="text-white text-xl sm:text-3xl font-black uppercase tracking-tighter mb-1 sm:mb-2 break-words"
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {category.name}
          </motion.h3>
          <div
            className="flex items-center text-primary font-bold uppercase tracking-wider text-[10px] sm:text-sm transition-all duration-300 opacity-100 h-auto md:opacity-0 md:h-0 group-hover:opacity-100 group-hover:h-auto"
          >
            Explore <ArrowRight size={14} className="ml-1 sm:ml-2 sm:w-4 sm:h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
