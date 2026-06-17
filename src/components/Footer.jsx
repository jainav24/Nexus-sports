import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="px-2 sm:px-4 md:px-8 pb-4 bg-background mt-12">
      <footer className="bg-[#050505] rounded-t-[2.5rem] md:rounded-t-[4rem] border border-white/5 pt-12 md:pt-20 pb-6 md:pb-8 px-6 md:px-16 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3 md:mb-4">
              Let's Stay <span className="text-primary">Connected</span>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 max-w-md mx-auto text-xs sm:text-base">
              Subscribe and get 15% off your first order plus exclusive access to new drops.
            </p>
            <form onSubmit={handleSubscribe} className="flex bg-[#111] border border-white/5 rounded-md p-1.5 max-w-md mx-auto relative group focus-within:border-primary/50 transition-colors">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none text-white focus:outline-none flex-grow px-3 sm:px-4 text-xs sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-md flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm">
                Subscribe <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </button>
            </form>
            {subscribed && (
              <div className="text-green-500 mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Successfully subscribed!
              </div>
            )}
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-8 mb-12 md:mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2 mb-4 md:mb-6">
                <span className="text-primary">Nexus</span> Sports
              </Link>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
                Premium sportswear for the modern individual. Designed with intention, crafted for longevity.
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="w-10 h-10 rounded-md bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Shop</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/products?category=womens" className="text-gray-400 hover:text-white transition-colors">Women's</Link></li>
                <li><Link to="/products?category=mens" className="text-gray-400 hover:text-white transition-colors">Men's</Link></li>
                <li><Link to="/products?category=accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
                <li><Link to="/products?new=true" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4 md:mb-6">Support</h4>
              <ul className="space-y-3 md:space-y-4 text-sm">
                <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping</Link></li>
                <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
                <li><Link to="/track-order" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 md:gap-0">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Nexus Sports. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
