import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ShieldCheck, CreditCard, ChevronLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart, addToast } = useAppContext();
  const navigate = useNavigate();

  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.address || !formData.city || !formData.zip) {
      addToast('Please fill in all required fields.', 'error');
      return;
    }
    
    // Show success modal and clear cart
    setOrderComplete(true);
    clearCart();
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-heading mb-3">Your cart is empty</h2>
        <p className="text-body mb-8 text-sm text-center">You cannot proceed to checkout with an empty cart.</p>
        <Link to="/products" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 text-sm shadow-md">
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <AnimatePresence>
        {orderComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-heading/60 backdrop-blur-sm p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-elevated w-full max-w-md text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500" />
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-heading mb-3">Order Completed!</h2>
              <p className="text-body text-sm leading-relaxed mb-8">
                Thank you for your purchase, <span className="font-semibold text-heading">{formData.firstName}</span>. Your order has been placed successfully and will be shipped soon. Pay with cash upon delivery.
              </p>
              <Link
                to="/products"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                Continue Shopping <ShoppingBag size={16} />
              </Link>
              <Link
                to="/account"
                className="block w-full mt-4 text-muted hover:text-heading font-medium text-sm transition-colors"
              >
                View in Account
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/cart" className="text-muted hover:text-heading flex items-center gap-1.5 transition-colors text-sm font-medium">
            <ChevronLeft size={16} /> Back to Cart
          </Link>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-heading mb-8 md:mb-10">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-3/5">
            <form id="checkout-form" onSubmit={handlePlaceOrder}>
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-card p-6 md:p-8 mb-6"
              >
                <h2 className="font-display text-xl font-bold text-heading mb-6 pb-4 border-b border-black/[0.06]">Shipping Information</h2>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">First Name *</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Full Address *</label>
                    <textarea required name="address" rows="3" value={formData.address} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all resize-none placeholder:text-muted/60" placeholder="House/Flat No., Street, Landmark"></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-1">
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">City *</label>
                      <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">State *</label>
                      <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">PIN Code *</label>
                      <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-bold text-heading mb-6 pb-4 border-b border-black/[0.06]">Payment Method</h2>
                
                <div className="border-2 border-primary/30 bg-primary/5 rounded-xl p-5 flex items-start gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full border-[5px] border-primary flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-heading text-sm flex items-center gap-2 mb-1">
                      <CreditCard size={16} className="text-primary" /> Cash on Delivery (COD)
                    </h3>
                    <p className="text-body text-xs leading-relaxed">Pay with cash when your order is delivered to your doorstep. Simple, safe, and secure.</p>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-surface-2 rounded-xl text-xs text-muted font-medium flex gap-3 items-start">
                  <ShieldCheck size={18} className="text-heading flex-shrink-0" />
                  <p>No other payment methods are currently available. We ensure 100% secure handling of all orders.</p>
                </div>
              </motion.div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-elevated p-6 md:p-8 sticky top-28"
            >
              <h2 className="font-display text-lg font-bold text-heading mb-6 pb-4 border-b border-black/[0.06]">Your Order</h2>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-lg bg-surface-2 overflow-hidden flex-shrink-0 relative border border-black/[0.04]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute top-0 right-0 bg-heading text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-bl-lg">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-heading text-sm font-bold truncate">{item.name}</h4>
                      <p className="text-muted text-[11px] mt-0.5">Size: {item.size}</p>
                    </div>
                    <div className="text-heading text-sm font-bold text-right flex-shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 text-sm border-t border-black/[0.06] pt-5">
                <div className="flex justify-between text-body">
                  <span>Subtotal</span>
                  <span className="text-heading font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Payment Fee (COD)</span>
                  <span className="text-heading font-medium">₹0</span>
                </div>
              </div>

              <div className="border-t border-black/[0.06] pt-5 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-heading font-bold text-base">Total to Pay</span>
                  <span className="text-3xl font-display font-bold text-heading">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                disabled={orderComplete}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                Place Order <Truck size={16} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
