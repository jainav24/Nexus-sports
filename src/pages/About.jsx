import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    { year: '2015', title: 'The Beginning', description: 'Nexus Sports was founded in a small garage with a vision to revolutionize athletic performance gear.' },
    { year: '2018', title: 'Pro Series Launch', description: 'Introduced our flagship Pro Series, adopted by elite athletes worldwide.' },
    { year: '2021', title: 'Global Expansion', description: 'Opened flagship stores in 15 countries, bringing Nexus to the world.' },
    { year: '2024', title: 'Sustainable Future', description: 'Launched our fully recycled activewear line, committing to a greener planet.' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1920&auto=format&fit=crop" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering athletes to push beyond their limits through innovative, premium performance gear.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8"
             >
               We Engineer Greatness
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-2xl text-gray-400 leading-relaxed"
             >
               At Nexus Sports, we believe that within every individual lies an untapped potential. Our mission is to craft apparel and equipment that removes the barriers between you and your peak performance. We don't just make clothes; we create tools for champions.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-white/5">
         <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Innovation', desc: 'Relentlessly pursuing new technologies to enhance athletic performance.' },
               { title: 'Quality', desc: 'Crafting premium products built to withstand the toughest conditions.' },
               { title: 'Sustainability', desc: 'Protecting the playgrounds where we run, train, and compete.' }
             ].map((value, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="p-8 border border-white/10 rounded-sm bg-white/5 text-center"
               >
                 <h3 className="text-2xl font-black uppercase tracking-tighter text-primary mb-4">{value.title}</h3>
                 <p className="text-gray-400">{value.desc}</p>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16 text-center">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10" />
            
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12" />
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
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
