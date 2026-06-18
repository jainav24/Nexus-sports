import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/mockData';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory.toLowerCase() === 'all' ? 'All' : initialCategory);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const categories = ['All', 'Football', 'Basketball', 'Running', 'Training'];

  useEffect(() => {
    let filtered = allProducts;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setProducts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-5 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-black/[0.06] pb-8 gap-4">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-heading mb-1.5">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-muted text-sm">{products.length} results</p>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <div className={`relative w-full md:w-56 transition-all duration-300 ${searchFocused ? 'md:w-72' : ''}`}>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white border border-black/[0.08] text-heading pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${searchFocused ? 'text-primary' : 'text-muted'}`} strokeWidth={1.5} />
            </div>
            <button
              className="md:hidden bg-white border border-black/[0.08] text-body px-3.5 py-2.5 rounded-xl flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-muted font-semibold uppercase tracking-wider text-[11px] mb-4">Categories</h3>
              <ul className="space-y-1">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left w-full text-sm py-2 px-3 rounded-xl transition-all duration-200 ${
                        selectedCategory.toLowerCase() === cat.toLowerCase()
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-body/60 hover:text-heading hover:bg-surface-2'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="bg-white p-4 rounded-xl border border-black/[0.06] mb-6 shadow-card">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-muted font-semibold uppercase tracking-wider text-[11px]">Categories</h3>
                    <button onClick={() => setIsFilterOpen(false)} className="text-muted hover:text-heading">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          selectedCategory.toLowerCase() === cat.toLowerCase()
                            ? 'bg-primary text-white'
                            : 'bg-surface-2 text-body/60 hover:text-heading'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1">
            {products.length > 0 ? (
              <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {products.map((product, i) => (
                  <motion.div layout key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.03 }}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-display font-bold text-heading mb-2">No products found</h3>
                <p className="text-muted text-sm mb-6">Try adjusting your search or filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 font-medium text-sm rounded-xl transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
