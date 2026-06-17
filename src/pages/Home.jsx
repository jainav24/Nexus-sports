import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import CoverflowCarousel from '../components/CoverflowCarousel';
import { categories, products, testimonials } from '../data/mockData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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

        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl mt-12 md:mt-20"
          >
            <motion.p 
              variants={itemVariants}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
            >
              Nexus Sports 2026
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[1.1] mb-6"
            >
              Redefine <br /> The Standard.
            </motion.h1>
            <motion.div variants={itemVariants}>
              <Link to="/products" className="inline-block border-b-2 border-white text-white font-bold pb-1 uppercase tracking-widest text-xs md:text-sm hover:text-primary hover:border-primary transition-colors">
                Discover the Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">Explore Categories</h2>
              <p className="text-gray-400">Gear up for your specific discipline.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-primary font-bold uppercase tracking-wider hover:text-white transition-colors">
              View All <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">Best Sellers</h2>
            <p className="text-gray-400">Our most popular gear, chosen by athletes.</p>
          </motion.div>

          <CoverflowCarousel items={products} />
        </div>
      </section>

      {/* Athlete Collection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20" />
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop" alt="Elite Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">Elite Training<br/>Collection</h3>
                <Link to="/products?collection=elite" className="inline-block bg-white text-black font-bold py-3 px-6 rounded-sm uppercase tracking-wider w-max hover:bg-primary hover:text-white transition-colors">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20" />
              <img src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=800&auto=format&fit=crop" alt="Urban Sports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">Urban Sports<br/>Collection</h3>
                <Link to="/products?collection=urban" className="inline-block bg-white text-black font-bold py-3 px-6 rounded-sm uppercase tracking-wider w-max hover:bg-primary hover:text-white transition-colors">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        
        {/* Desktop Grid */}
        <div className="container mx-auto px-4 md:px-8 hidden md:block">
          <div className="grid grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-5xl font-black mb-2 tracking-tighter">500K+</div>
              <div className="uppercase tracking-wider text-sm font-medium opacity-90">Customers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-5xl font-black mb-2 tracking-tighter">100+</div>
              <div className="uppercase tracking-wider text-sm font-medium opacity-90">Countries</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-5xl font-black mb-2 tracking-tighter">10M+</div>
              <div className="uppercase tracking-wider text-sm font-medium opacity-90">Products Sold</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="text-5xl font-black mb-2 tracking-tighter">98%</div>
              <div className="uppercase tracking-wider text-sm font-medium opacity-90">Satisfaction</div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden w-full flex">
          <motion.div 
            className="flex whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center mx-6">
                  <div className="text-4xl font-black mb-1 tracking-tighter">500K+</div>
                  <div className="uppercase tracking-wider text-xs font-medium opacity-90">Customers</div>
                </div>
                <div className="text-center mx-6">
                  <div className="text-4xl font-black mb-1 tracking-tighter">100+</div>
                  <div className="uppercase tracking-wider text-xs font-medium opacity-90">Countries</div>
                </div>
                <div className="text-center mx-6">
                  <div className="text-4xl font-black mb-1 tracking-tighter">10M+</div>
                  <div className="uppercase tracking-wider text-xs font-medium opacity-90">Products Sold</div>
                </div>
                <div className="text-center mx-6">
                  <div className="text-4xl font-black mb-1 tracking-tighter">98%</div>
                  <div className="uppercase tracking-wider text-xs font-medium opacity-90">Satisfaction</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default Home;
