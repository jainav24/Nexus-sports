import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useAppContext();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8 max-w-md text-center">Looks like you haven't added any gear to your cart yet. Discover our premium collection and push your limits.</p>
        <Link to="/products" className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-10">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-card rounded-sm border border-white/5 overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-400">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="divide-y divide-white/5">
                {cart.map((item) => (
                  <motion.div 
                    layout 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    key={`${item.id}-${item.size}`} 
                    className="p-4 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center"
                  >
                    <div className="col-span-6 flex items-center w-full">
                      <Link to={`/product/${item.id}`} className="w-20 h-20 bg-white/5 rounded-sm overflow-hidden flex-shrink-0 mr-4">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </Link>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{item.category}</div>
                        <Link to={`/product/${item.id}`} className="text-white font-bold hover:text-primary transition-colors block mb-1">
                          {item.name}
                        </Link>
                        <div className="text-gray-400 text-sm">Size: {item.size}</div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center text-gray-300 w-full sm:w-auto flex justify-between sm:block">
                      <span className="sm:hidden text-gray-500 text-sm">Price:</span>
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                    
                    <div className="col-span-2 flex justify-center w-full sm:w-auto">
                      <div className="flex items-center border border-white/20 rounded-sm">
                        <button onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                          <Minus size={12} />
                        </button>
                        <div className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold">
                          {item.quantity}
                        </div>
                        <button onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 flex items-center justify-between sm:justify-end w-full sm:w-auto">
                      <span className="sm:hidden text-gray-500 text-sm">Total:</span>
                      <div className="text-white font-bold mr-4">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                      <button onClick={() => removeFromCart(item.id, item.size)} className="text-gray-500 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link to="/products" className="text-gray-400 hover:text-white uppercase text-sm font-bold tracking-wider flex items-center transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" /> Continue Shopping
              </Link>
              <button onClick={clearCart} className="text-gray-400 hover:text-red-500 uppercase text-sm font-bold tracking-wider transition-colors">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-card rounded-sm border border-white/5 p-6 sticky top-32">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6 border-b border-white/5 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold uppercase tracking-wider">Total</span>
                  <span className="text-3xl font-black text-primary">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 bg-background border border-white/10 text-white px-4 py-2 rounded-sm focus:outline-none focus:border-primary" />
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors">Apply</button>
                </div>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Checkout <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
