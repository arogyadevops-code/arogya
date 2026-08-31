import React from 'react';
import { BotanicalDecoration } from './ui/BotanicalDecoration';

export function Footer() {
  return (
    <footer id="contact" className="bg-forest-dark text-ivory border-t border-ivory/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative Botanical Watermark */}
      <BotanicalDecoration variant="leaf2" className="bottom-0 right-0 w-[600px] h-[600px] -mb-20 -mr-20 opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-serif text-3xl tracking-wider font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold">
                <span className="font-serif text-sm">A</span>
              </div>
              AROGYA
            </div>
            <p className="text-ivory/70 font-light mb-6 max-w-xs leading-relaxed">
              Authentic Ayurveda.<br />
              Modern wellness.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/50 block"></span>
              Explore
            </h4>
            <ul className="space-y-4 font-light text-ivory/70">
              <li><a href="/" className="hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors duration-300">About</a></li>
              <li><a href="/treatments" className="hover:text-gold transition-colors duration-300">Treatments</a></li>
              <li><a href="/care-plans" className="hover:text-gold transition-colors duration-300">Care Plans</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/50 block"></span>
              Contact
            </h4>
            <ul className="space-y-4 font-light text-ivory/70">
              <li>Abu Dhabi, UAE</li>
              <li><a href="tel:+97100000000" className="hover:text-gold transition-colors duration-300">Phone: +971 00 000 000</a></li>
              <li><a href="mailto:info@arogya.ae" className="hover:text-gold transition-colors duration-300">Email: info@arogya.ae</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">WhatsApp</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-serif text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/50 block"></span>
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:text-forest-dark hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:text-forest-dark hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ivory/10 text-center md:text-left text-xs tracking-wider uppercase text-ivory/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Arogya Ayurveda. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
