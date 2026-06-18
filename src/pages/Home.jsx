import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import CoverflowCarousel from '../components/CoverflowCarousel';
import { categories, products } from '../data/mockData';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-5 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <div className="max-w-2xl mt-12 md:mt-20">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-semibold tracking-[0.25em] uppercase text-[11px] md:text-xs mb-5"
            >
              Collection 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[2.8rem] md:text-7xl font-bold tracking-tight text-heading leading-[1.05] mb-4"
            >
              Redefine<br />
              <span className="font-light text-heading/40">the standard.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-body/60 text-sm md:text-base max-w-md mb-8 leading-relaxed"
            >
              Performance gear engineered for athletes who don't settle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-3"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Shop Collection <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-sm text-heading font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-300 shadow-sm"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-heading/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-10 md:mb-12"
          >
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-heading mb-1.5">
                Categories
              </h2>
              <p className="text-muted text-sm">Gear up for your discipline.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1.5 text-primary hover:text-primary-dark font-medium text-sm transition-colors">
              View all <ArrowRight size={15} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 md:py-28 bg-surface-2">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-heading mb-1.5">
              Best Sellers
            </h2>
            <p className="text-muted text-sm">Our most popular gear, chosen by athletes.</p>
          </motion.div>

          <CoverflowCarousel items={products} />
        </div>
      </section>

      {/* Dual Collection Banners */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 transition-all duration-700 group-hover:from-black/50" />
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop" alt="Elite Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2">Performance</p>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 drop-shadow-md">Elite Training<br/>Collection</h3>
                <Link to="/products?collection=elite" className="inline-flex items-center gap-1.5 bg-white text-heading font-semibold py-2.5 px-5 rounded-xl text-xs w-max hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 transition-all duration-700 group-hover:from-black/50" />
              <img src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=800&auto=format&fit=crop" alt="Urban Sports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2">Lifestyle</p>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 drop-shadow-md">Urban Sports<br/>Collection</h3>
                <Link to="/products?collection=urban" className="inline-flex items-center gap-1.5 bg-white text-heading font-semibold py-2.5 px-5 rounded-xl text-xs w-max hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section — vibrant gradient */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-5 md:px-8 relative z-10 hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '500K+', label: 'Customers worldwide' },
              { value: '100+', label: 'Countries served' },
              { value: '10M+', label: 'Products shipped' },
              { value: '98%', label: 'Satisfaction rate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-1.5 tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden w-full flex relative z-10">
          <motion.div
            className="flex whitespace-nowrap w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 12 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { value: '500K+', label: 'Customers' },
                  { value: '100+', label: 'Countries' },
                  { value: '10M+', label: 'Shipped' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((stat, j) => (
                  <div key={j} className="text-center mx-7">
                    <div className="text-3xl font-display font-bold mb-0.5 tracking-tight">{stat.value}</div>
                    <div className="uppercase tracking-wider text-[10px] font-medium opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
