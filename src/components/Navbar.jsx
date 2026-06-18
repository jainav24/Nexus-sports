import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, Search, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistCount } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 top-0 left-0 right-0 ${
      isScrolled ? 'px-4 pt-4 md:px-8 md:pt-5' : 'px-0 pt-0'
    }`}>
      <nav
        className={`transition-all duration-500 mx-auto max-w-[1400px] ${
          isScrolled
            ? 'rounded-2xl py-3 px-5 md:px-8 bg-surface-2/95 backdrop-blur-xl shadow-md border border-black/[0.05]'
            : 'rounded-none py-5 px-5 md:px-8 bg-transparent shadow-none border-transparent'
        }`}
      >
        <div className="flex justify-between items-center relative z-50">
          {/* Logo */}
          <Link to="/" className="font-display text-xl md:text-xl font-bold tracking-tight uppercase flex items-center gap-1">
            <span className="text-gradient">Nexus</span>
            <span className="font-light text-heading/50">Sports</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-[13px] font-medium tracking-wide uppercase transition-colors group"
                >
                  <span className={isActive ? 'text-heading' : 'text-body/60 group-hover:text-heading'}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Icons & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:gap-5">
            <button className="hidden md:flex text-heading/60 hover:text-heading transition-all hover:scale-105 duration-200">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link to="/account" className="text-heading/60 hover:text-heading transition-all hover:scale-105 duration-200">
              <User size={18} strokeWidth={1.5} />
            </Link>
            <Link to="/wishlist" className="relative text-heading/60 hover:text-heading transition-all hover:scale-105 duration-200">
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-heading/60 hover:text-heading transition-all hover:scale-105 duration-200">
              <ShoppingCart size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-heading text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden ml-1 text-heading hover:text-primary transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-0 left-0 w-screen h-[100dvh] bg-white/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full gap-2 pt-24 pb-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-display font-bold tracking-tight py-3 px-6 transition-colors block text-center ${
                      location.pathname === link.path ? 'text-primary' : 'text-heading hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-8 mt-8 pt-8 border-t border-black/[0.06] w-full max-w-[250px] justify-center"
              >
                <Link to="/account" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center gap-1.5 text-body/60 hover:text-heading transition-colors">
                  <User size={20} strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-widest">Account</span>
                </Link>
                <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center gap-1.5 text-body/60 hover:text-heading transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-widest relative">
                    Wishlist
                    {wishlistCount > 0 && <span className="absolute -top-1 -right-3 bg-primary text-white text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">{wishlistCount}</span>}
                  </span>
                </Link>
                <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center gap-1.5 text-body/60 hover:text-heading transition-colors">
                  <ShoppingCart size={20} strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-widest relative">
                    Cart
                    {cartCount > 0 && <span className="absolute -top-1 -right-3 bg-primary text-white text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">{cartCount}</span>}
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
