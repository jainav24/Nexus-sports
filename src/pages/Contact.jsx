import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, Send } from 'lucide-react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { question: 'What is your return policy?', answer: 'We offer a 30-day return policy for all unworn items with original tags attached. Custom and personalized items are final sale.' },
    { question: 'How do I track my order?', answer: 'Once your order ships, you will receive an email with tracking information. You can also track your order through your Nexus Sports account.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to over 100 countries worldwide. Shipping rates and delivery times vary by location.' },
    { question: 'How can I contact customer service?', answer: 'Our support team is available 24/7 via email at support@nexussports.com or by phone at +91 800 123 4567.' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Have a question about our products, an order, or just want to say hello? We're here for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-sm border border-white/5"
          >
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Subject</label>
                <input type="text" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Message</label>
                <textarea rows="4" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-sm">
               <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6">Contact Information</h3>
               <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <MapPin size={24} className="text-primary mr-4 flex-shrink-0" />
                    <div>
                      <strong className="block text-white mb-1">India Headquarters</strong>
                      Nexus Sports, 1st Floor, Indiranagar<br/>Bengaluru, Karnataka 560038, India
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone size={24} className="text-primary mr-4 flex-shrink-0" />
                    <div>
                      <strong className="block text-white mb-1">Phone Support</strong>
                      +91 800 123 4567 <span className="text-sm text-gray-500">(24/7)</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail size={24} className="text-primary mr-4 flex-shrink-0" />
                    <div>
                      <strong className="block text-white mb-1">Email Us</strong>
                      support@nexussports.com
                    </div>
                  </li>
               </ul>
            </div>

            {/* Simulated Map */}
            <div className="flex-1 bg-card border border-white/5 rounded-sm overflow-hidden relative min-h-[300px]">
              <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center pointer-events-none">
                 <div className="bg-primary text-white font-bold py-2 px-4 rounded-sm shadow-lg flex items-center gap-2">
                   <MapPin size={18} /> Nexus HQ
                 </div>
              </div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover grayscale opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border border-white/5 rounded-sm overflow-hidden">
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="text-white font-bold">{faq.question}</span>
                  <ChevronDown size={20} className={`text-primary transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
