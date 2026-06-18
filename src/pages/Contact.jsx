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
      <div className="container mx-auto px-5 md:px-8">

        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight text-heading mb-4"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body text-sm md:text-base leading-relaxed"
          >
            Questions about products, orders, or anything else? We're here for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-28">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-card"
          >
            <h2 className="font-display text-xl font-bold text-heading mb-6">Send a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Last Name</label>
                  <input type="text" className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Email</label>
                <input type="email" className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
              </div>
              <div>
                <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Subject</label>
                <input type="text" className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
              </div>
              <div>
                <label className="block text-muted text-[11px] uppercase tracking-wider mb-1.5">Message</label>
                <textarea rows="4" className="w-full bg-surface-2 border border-black/[0.06] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                Send Message <Send size={15} strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-white shadow-card p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-heading mb-6">Contact information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-heading text-sm font-medium mb-0.5">India Headquarters</strong>
                    <span className="text-body text-sm leading-relaxed">Nexus Sports, 1st Floor, Indiranagar<br/>Bengaluru, Karnataka 560038</span>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-heading text-sm font-medium mb-0.5">Phone Support</strong>
                    <span className="text-body text-sm">+91 800 123 4567 <span className="text-muted">(24/7)</span></span>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-heading text-sm font-medium mb-0.5">Email</strong>
                    <span className="text-body text-sm">support@nexussports.com</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="flex-1 bg-white shadow-card rounded-2xl overflow-hidden relative min-h-[250px]">
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm text-heading font-medium py-2 px-4 rounded-xl shadow-elevated flex items-center gap-1.5 text-sm border border-black/[0.06]">
                  <MapPin size={14} className="text-primary" /> Nexus HQ
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover grayscale opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight text-heading mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white shadow-sm hover:shadow-card transition-shadow duration-300 rounded-2xl overflow-hidden border border-black/[0.04]">
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none group"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="text-heading font-medium text-sm group-hover:text-primary transition-colors">{faq.question}</span>
                  <ChevronDown size={16} className={`text-muted transition-transform duration-300 flex-shrink-0 ml-4 ${activeFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-5 text-body text-sm leading-relaxed">
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
