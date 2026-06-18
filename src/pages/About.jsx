import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Leaf } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2015', title: 'The Beginning', description: 'Nexus Sports was founded in a small garage with a vision to revolutionize athletic performance gear.' },
    { year: '2018', title: 'Pro Series Launch', description: 'Introduced our flagship Pro Series, adopted by elite athletes worldwide.' },
    { year: '2021', title: 'Global Expansion', description: 'Opened flagship stores in 15 countries, bringing Nexus to the world.' },
    { year: '2024', title: 'Sustainable Future', description: 'Launched our fully recycled activewear line, committing to a greener planet.' },
  ];

  const values = [
    { icon: Zap, title: 'Innovation', number: '01', desc: 'Relentlessly pursuing new technologies to enhance athletic performance.' },
    { icon: Shield, title: 'Quality', number: '02', desc: 'Crafting premium products built to withstand the toughest conditions.' },
    { icon: Leaf, title: 'Sustainability', number: '03', desc: 'Protecting the playgrounds where we run, train, and compete.' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="relative h-[55vh] md:h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 z-10" />
          <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1920&auto=format&fit=crop" alt="About Hero" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-5 md:px-8 relative z-20 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-primary font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">Est. 2015</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-heading mb-5">Our Story</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-body max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Empowering athletes to push beyond their limits through innovative, premium performance gear.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="text-primary/10 font-display text-[120px] md:text-[180px] leading-none absolute -top-12 -left-4 md:-left-8 select-none">"</div>
              <p className="font-display text-xl md:text-3xl font-light text-heading/70 leading-relaxed relative z-10 pl-2 md:pl-6">
                At Nexus Sports, we believe that within every individual lies an untapped potential. Our mission is to craft apparel and equipment that removes the barriers between you and your{' '}
                <span className="text-gradient font-medium">peak performance</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface-2">
        <div className="container mx-auto px-5 md:px-8">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold tracking-tight text-heading mb-12 text-center">What drives us</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-7 md:p-8 bg-white rounded-2xl shadow-card group hover:shadow-card-hover transition-shadow duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon size={18} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-muted/40 font-display text-sm font-bold">{value.number}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-heading mb-2">{value.title}</h3>
                <p className="text-body text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold tracking-tight text-heading mb-16 text-center">Our Journey</motion.h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/30 via-black/[0.06] to-transparent" />
            <div className="space-y-16 md:space-y-20">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12" />
                  <div className="w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 flex-shrink-0 shadow-md">
                    <span className="text-primary text-[10px] font-display font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-primary font-display font-bold text-sm mb-1">{item.year}</div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-heading mb-1.5">{item.title}</h3>
                    <p className="text-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
