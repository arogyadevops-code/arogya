"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { treatmentCategories } from '@/data/treatments';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export function TreatmentList() {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 lg:py-32 bg-ivory text-text-dark -mt-16 pt-32 lg:pt-48 relative z-10 overflow-hidden">
      
      {/* Luxurious Ayurvedic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-gold/5 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute top-[40%] right-[5%] w-[35rem] h-[35rem] bg-forest-soft/10 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[45rem] h-[45rem] bg-gold/5 rounded-full blur-[130px] mix-blend-multiply"></div>
        
        {/* Subtle Luxury Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23285135' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="space-y-32 lg:space-y-48">
          {treatmentCategories.map((treatment, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={treatment.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-5/12 relative"
                >
                  <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                    <Image 
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-32 h-32 border border-gold/40 rounded-full z-[-1]`}></div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-7/12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold font-serif text-2xl">{treatment.number}</span>
                    <span className="w-12 h-[1px] bg-gold block"></span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif text-forest-dark leading-tight mb-6">
                    {treatment.title}
                  </h2>
                  
                  <p className="text-xl text-text-muted font-light leading-relaxed mb-8">
                    {treatment.longDescription}
                  </p>

                  {/* Benefits List */}
                  <div className="bg-white/50 p-8 rounded-2xl border border-border mb-8">
                    <h3 className="text-lg font-serif text-forest-dark mb-4 uppercase tracking-wider">Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-text-dark/80 font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Sub-Therapies Section */}
                  {treatment.subTherapies && (
                    <div className="mt-8">
                      <button 
                        onClick={() => toggleExpand(treatment.id)}
                        className="flex items-center gap-3 text-forest-dark font-semibold tracking-wide uppercase hover:text-gold transition-colors duration-300 group"
                      >
                        <span className="text-sm">View Specialized Therapies</span>
                        <div className={`w-8 h-8 rounded-full border border-forest-soft flex items-center justify-center transition-all duration-500 group-hover:border-gold ${expandedId === treatment.id ? 'rotate-180 bg-gold border-gold text-white' : ''}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedId === treatment.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 pb-4 space-y-12">
                              {treatment.subTherapies.map((group, groupIdx) => (
                                <div key={groupIdx}>
                                  <h4 className="text-xl font-serif text-forest-primary mb-2">{group.groupName}</h4>
                                  {group.description && (
                                    <p className="text-text-muted font-light text-sm mb-6">{group.description}</p>
                                  )}
                                  
                                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {group.therapies.map((therapy, therapyIdx) => (
                                      <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: therapyIdx * 0.05 + 0.2 }}
                                        key={therapyIdx} 
                                        className="bg-white border border-border rounded-xl p-4 flex items-center gap-3 hover:bg-forest-light hover:border-forest-soft transition-all duration-300 cursor-default group/item"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover/item:bg-gold transition-colors"></div>
                                        <span className="font-serif text-forest-dark group-hover/item:text-forest-primary transition-colors">{therapy}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
