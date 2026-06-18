import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Footer = () => {

  return (
    <div className="px-3 sm:px-4 md:px-8 pb-4 bg-background mt-16">
      <footer className="bg-heading rounded-2xl md:rounded-3xl pt-12 md:pt-16 pb-6 md:pb-8 px-6 md:px-14 relative overflow-hidden">
        <div className="container mx-auto">

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-8 mb-12 md:mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link to="/" className="font-display text-lg font-bold tracking-tight text-white uppercase flex items-center gap-1 mb-4 md:mb-5">
                <span className="text-primary">Nexus</span>
                <span className="font-light text-white/70">Sports</span>
              </Link>
              <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
                Premium sportswear for the modern individual. Designed with intention, crafted for longevity.
              </p>
              <div className="flex gap-2">
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white/50 font-semibold uppercase tracking-wider text-[11px] mb-5">Explore</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white/30 hover:text-white/70 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-white/30 hover:text-white/70 transition-colors text-sm">Contact</Link></li>
                <li><Link to="/faq" className="text-white/30 hover:text-white/70 transition-colors text-sm">FAQ</Link></li>
                <li><Link to="/careers" className="text-white/30 hover:text-white/70 transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/50 font-semibold uppercase tracking-wider text-[11px] mb-5">Shop</h4>
              <ul className="space-y-3">
                <li><Link to="/products?category=womens" className="text-white/30 hover:text-white/70 transition-colors text-sm">Women's</Link></li>
                <li><Link to="/products?category=mens" className="text-white/30 hover:text-white/70 transition-colors text-sm">Men's</Link></li>
                <li><Link to="/products?category=accessories" className="text-white/30 hover:text-white/70 transition-colors text-sm">Accessories</Link></li>
                <li><Link to="/products?new=true" className="text-white/30 hover:text-white/70 transition-colors text-sm">New Arrivals</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white/50 font-semibold uppercase tracking-wider text-[11px] mb-5">Support</h4>
              <ul className="space-y-3">
                <li><Link to="/shipping" className="text-white/30 hover:text-white/70 transition-colors text-sm">Shipping</Link></li>
                <li><Link to="/returns" className="text-white/30 hover:text-white/70 transition-colors text-sm">Returns</Link></li>
                <li><Link to="/size-guide" className="text-white/30 hover:text-white/70 transition-colors text-sm">Size Guide</Link></li>
                <li><Link to="/track-order" className="text-white/30 hover:text-white/70 transition-colors text-sm">Track Order</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center text-[11px] text-white/25 gap-3 md:gap-0">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Nexus Sports. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <Link to="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-white/50 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
