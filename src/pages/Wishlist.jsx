import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useAppContext();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <Heart size={40} />
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-400 mb-8 max-w-md">Save your favorite gear here. Build your ultimate athletic arsenal and never lose track of what you want.</p>
        <Link to="/products" className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
           <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Your Wishlist</h1>
           <p className="text-gray-400">{wishlist.length} Items</p>
        </div>
        
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {wishlist.map((product) => (
            <motion.div layout key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
           <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-white uppercase text-sm font-bold tracking-wider transition-colors">
              <ArrowRight size={16} className="mr-2 rotate-180" /> Back to Shopping
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
