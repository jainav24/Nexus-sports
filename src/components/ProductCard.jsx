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
      className="bg-card rounded-lg overflow-hidden border border-white/5 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden bg-white/5">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-white/5" />
        )}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {!product.inStock && (
             <span className="bg-red-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 uppercase rounded-sm tracking-wider">
               Sold Out
             </span>
          )}
          {product.price > 20000 && (
            <span className="bg-primary text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 uppercase rounded-sm tracking-wider">
              Premium
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${isWishlisted ? 'bg-primary/20 text-primary' : 'bg-black/20 text-white hover:bg-primary/50'}`}
        >
          <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} className="sm:w-4 sm:h-4" />
        </button>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <div className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2 truncate hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-end mb-3 sm:mb-4">
          <div className="text-primary font-bold text-base sm:text-xl">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          <div className="flex items-center text-gray-400 text-[10px] sm:text-sm">
            <Star size={12} className="text-yellow-500 mr-1 sm:w-3.5 sm:h-3.5" fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <button 
            disabled={!product.inStock}
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 rounded-sm text-[10px] sm:text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
          >
            <ShoppingBag size={12} className="sm:w-3.5 sm:h-3.5" /> 
            <span className="hidden sm:inline">{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
            <span className="sm:hidden">{product.inStock ? 'Add' : 'Out'}</span>
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-sm text-[10px] sm:text-xs uppercase tracking-wider transition-colors flex items-center justify-center"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
