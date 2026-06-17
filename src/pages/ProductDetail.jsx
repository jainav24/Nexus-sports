import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, RotateCcw, Heart, Minus, Plus } from 'lucide-react';
import { products } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, toggleWishlist, wishlist } = useAppContext();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-white">Product not found</div>;
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  // Mock gallery
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop"
  ];

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex text-xs uppercase tracking-wider text-gray-400 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-24 flex-shrink-0">
              {gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-card rounded-sm overflow-hidden aspect-square relative">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={gallery[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6 border-b border-white/10 pb-6">
              <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className="mx-2">·</span>
                  <span className="underline cursor-pointer hover:text-white">{product.reviews} Reviews</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-bold uppercase tracking-wider text-sm">Select Size</span>
                <span className="text-gray-400 text-xs underline cursor-pointer hover:text-white">Size Guide</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border rounded-sm flex items-center justify-center font-bold transition-all ${selectedSize === size ? 'border-primary bg-primary text-white' : 'border-white/20 text-gray-300 hover:border-white'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-white font-bold uppercase tracking-wider text-sm block mb-3">Quantity</span>
              <div className="flex items-center border border-white/20 w-max rounded-sm">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Minus size={16} />
                </button>
                <div className="w-12 h-12 flex items-center justify-center text-white font-bold">
                  {quantity}
                </div>
                <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => addToCart(product, quantity, selectedSize)}
                disabled={!product.inStock}
                className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider transition-colors"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`w-full sm:w-auto border py-4 px-6 rounded-sm flex items-center justify-center transition-colors ${isWishlisted ? 'border-primary text-primary bg-primary/10' : 'border-white/20 text-white hover:bg-white/5'}`}
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} className="sm:mr-0 mr-2" />
                <span className="sm:hidden font-bold uppercase tracking-wider">Wishlist</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-400">
                <Truck size={20} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <RotateCcw size={20} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Shield size={20} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
