import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { toggleWishlist, wishlist, addToCart } = useAppContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover flex flex-col h-full transition-shadow duration-500"
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse-soft bg-surface-2" />
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1.5">
          {!product.inStock && (
            <span className="bg-red-500 text-white text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 uppercase rounded-full tracking-wider shadow-sm">
              Sold Out
            </span>
          )}
          {product.price > 20000 && (
            <span className="bg-accent text-white text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 uppercase rounded-full tracking-wider shadow-sm">
              Premium
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${isWishlisted ? 'bg-primary text-white scale-110' : 'bg-white/90 backdrop-blur-sm text-heading/40 hover:bg-white hover:text-primary'}`}
        >
          <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} strokeWidth={1.5} className="sm:w-4 sm:h-4" />
        </button>
      </div>

      <div className="p-3.5 sm:p-4 flex flex-col flex-grow">
        <div className="text-muted text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] mb-1.5">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-heading font-display font-semibold text-sm sm:text-base mb-2 truncate group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        <div className="flex justify-between items-end mb-4">
          <div className="text-heading font-display font-bold text-base sm:text-lg">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          <div className="flex items-center gap-1 text-muted text-[10px] sm:text-xs">
            <Star size={11} className="text-amber-500" fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>

        <button
          disabled={!product.inStock}
          onClick={(e) => { e.preventDefault(); addToCart(product); }}
          className="mt-auto w-full bg-heading hover:bg-primary disabled:bg-surface-2 disabled:text-muted disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-xl text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
