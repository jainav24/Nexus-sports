import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useAppContext();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-surface-2 rounded-2xl flex items-center justify-center mb-6 text-muted">
          <Heart size={32} strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-heading mb-3">Your wishlist is empty</h2>
        <p className="text-body mb-8 max-w-sm text-sm leading-relaxed">Save your favorite gear here. Build your ultimate arsenal and never lose track of what you want.</p>
        <Link to="/products" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-black/[0.06] pb-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-heading">Wishlist</h1>
          <p className="text-muted text-sm font-medium">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
        </div>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {wishlist.map((product, i) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link to="/products" className="inline-flex items-center gap-1.5 text-body hover:text-primary text-sm font-medium transition-colors">
            <ArrowLeft size={14} /> Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
