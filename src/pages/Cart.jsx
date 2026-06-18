import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useAppContext();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-surface-2 rounded-2xl flex items-center justify-center mb-6 text-muted">
          <ShoppingBag size={32} strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-heading mb-3">Your cart is empty</h2>
        <p className="text-body mb-8 max-w-sm text-center text-sm leading-relaxed">Discover our premium collection and find gear that matches your ambition.</p>
        <Link to="/products" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-5 md:px-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-heading mb-8 md:mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-5 border-b border-black/[0.04] text-[11px] font-semibold uppercase tracking-wider text-muted">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-black/[0.04]">
                {cart.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={`${item.id}-${item.size}`}
                    className="p-5 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center hover:bg-surface-2/50 transition-colors"
                  >
                    <div className="col-span-6 flex items-center w-full">
                      <Link to={`/product/${item.id}`} className="w-16 h-16 md:w-20 md:h-20 bg-surface-2 rounded-xl overflow-hidden flex-shrink-0 mr-4">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </Link>
                      <div>
                        <div className="text-[10px] text-muted uppercase tracking-wider mb-0.5">{item.category}</div>
                        <Link to={`/product/${item.id}`} className="text-heading font-bold text-sm hover:text-primary transition-colors block mb-0.5">
                          {item.name}
                        </Link>
                        <div className="text-body text-xs">Size: {item.size}</div>
                      </div>
                    </div>

                    <div className="col-span-2 text-center text-body font-medium text-sm w-full sm:w-auto flex justify-between sm:block">
                      <span className="sm:hidden text-muted text-xs font-normal">Price:</span>
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>

                    <div className="col-span-2 flex justify-center w-full sm:w-auto">
                      <div className="flex items-center border border-black/[0.08] rounded-xl overflow-hidden bg-white">
                        <button onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-muted hover:text-heading hover:bg-surface-2 transition-colors">
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <div className="w-8 h-8 flex items-center justify-center text-heading text-sm font-medium border-x border-black/[0.08]">
                          {item.quantity}
                        </div>
                        <button onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-muted hover:text-heading hover:bg-surface-2 transition-colors">
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                      <span className="sm:hidden text-muted text-xs">Total:</span>
                      <div className="text-heading font-bold text-sm">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                      <button onClick={() => removeFromCart(item.id, item.size)} className="text-muted hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50">
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/products" className="text-body hover:text-primary text-sm font-medium flex items-center gap-1.5 transition-colors">
                <ArrowLeft size={14} /> Continue Shopping
              </Link>
              <button onClick={clearCart} className="text-muted hover:text-red-500 text-sm font-medium transition-colors">
                Clear Cart
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-elevated p-6 md:p-8 sticky top-28">
              <h2 className="font-display text-lg font-bold text-heading mb-6 pb-4 border-b border-black/[0.06]">Order Summary</h2>

              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-body">
                  <span>Subtotal</span>
                  <span className="text-heading font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Taxes</span>
                  <span className="text-muted">At checkout</span>
                </div>
              </div>

              <div className="border-t border-black/[0.06] pt-5 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-heading font-bold text-base">Total</span>
                  <span className="text-3xl font-display font-bold text-heading">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 text-sm transition-colors" />
                  <button className="bg-heading hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors">Apply</button>
                </div>
              </div>

              <Link to="/checkout" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2">
                Checkout <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
