import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, RotateCcw, Heart, Minus, Plus, ChevronRight } from 'lucide-react';
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

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-heading font-display text-lg">Product not found</div>;
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop"
  ];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex items-center gap-1.5 text-[11px] text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight size={11} />
          <span className="text-heading">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-20 flex-shrink-0">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImage === idx ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-white rounded-2xl overflow-hidden aspect-square relative shadow-card">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={gallery[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6 border-b border-black/[0.06] pb-6">
              <p className="text-muted text-[11px] uppercase tracking-[0.15em] mb-2">{product.category}</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-heading mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-xl font-display font-bold text-heading">₹{product.price.toLocaleString('en-IN')}</div>
                <div className="flex items-center gap-1.5 text-muted text-sm">
                  <Star size={14} className="text-amber-500" fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className="text-muted/40">·</span>
                  <span className="underline underline-offset-2 decoration-muted/20 cursor-pointer hover:text-heading transition-colors">{product.reviews} reviews</span>
                </div>
              </div>
              <p className="text-body leading-relaxed text-sm">{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-heading font-medium text-sm">Size</span>
                <span className="text-primary text-xs cursor-pointer hover:text-primary-dark transition-colors">Size guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-2 border-primary text-primary bg-primary/5'
                        : 'border border-black/[0.08] text-body hover:border-primary/30 hover:text-heading'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-heading font-medium text-sm block mb-3">Quantity</span>
              <div className="flex items-center border border-black/[0.08] w-max rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-muted hover:text-heading hover:bg-surface-2 transition-colors">
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <div className="w-10 h-10 flex items-center justify-center text-heading font-medium text-sm border-x border-black/[0.08]">
                  {quantity}
                </div>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-muted hover:text-heading hover:bg-surface-2 transition-colors">
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => addToCart(product, quantity, selectedSize)}
                disabled={!product.inStock}
                className="flex-1 bg-primary hover:bg-primary-dark disabled:bg-surface-2 disabled:text-muted disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`w-full sm:w-auto border py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  isWishlisted
                    ? 'border-primary/30 text-primary bg-primary/5'
                    : 'border-black/[0.08] text-body hover:bg-surface-2 hover:text-heading'
                }`}
              >
                <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} strokeWidth={1.5} />
                <span className="sm:hidden font-medium text-sm">Wishlist</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 py-6 border-t border-black/[0.06]">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Secure Checkout' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl bg-surface-2">
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                  <span className="text-muted text-[10px] uppercase tracking-wider text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight text-heading mb-8 text-center">
              You might also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
