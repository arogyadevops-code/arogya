import React from 'react';
import Image from 'next/image';
import { BotanicalDecoration } from './ui/BotanicalDecoration';
import { MapPin, Smartphone, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#BA9166] text-ivory border-t border-ivory/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative Botanical Watermark */}
      <BotanicalDecoration variant="leaf2" className="bottom-0 right-0 w-[600px] h-[600px] -mb-20 -mr-20 opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="block mb-6 relative w-64 h-24 overflow-hidden hover:opacity-80 transition-opacity">
              <Image 
                src="/images/footer-logo.png"
                alt="Arogya Ayurveda Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </a>
            <p className="text-ivory font-medium mb-6 max-w-xs leading-relaxed">
              Authentic Ayurveda.<br />
              Modern wellness.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-ivory uppercase tracking-[0.2em] text-xs font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-ivory/50 block"></span>
              Explore
            </h4>
            <ul className="space-y-4 font-medium text-ivory/90">
              <li><a href="/" className="hover:text-forest-dark transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-forest-dark transition-colors duration-300">About</a></li>
              <li><a href="/treatments" className="hover:text-forest-dark transition-colors duration-300">Treatments</a></li>
              <li><a href="/care-plans" className="hover:text-forest-dark transition-colors duration-300">Care Plans</a></li>
              <li><a href="/contact" className="hover:text-forest-dark transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-ivory tracking-[0.05em] text-xl font-bold mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-medium text-ivory/90 leading-relaxed text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Ji'dan Street, Bldg No.: C120, Office No.:M02,Shabiya 9, Opp. Bhavans School, Galaxy Gym Building, Mohamed Bin Zayed City, Abudhabi.</span>
              </li>
              <li className="flex gap-3 items-center">
                <Smartphone className="w-5 h-5 shrink-0" />
                <a href="tel:+971545811966" className="hover:text-forest-dark transition-colors duration-300">+971 545811966</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:025504828" className="hover:text-forest-dark transition-colors duration-300">(02) 5504828</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:connect@arogyaayurveda.ae" className="hover:text-forest-dark transition-colors duration-300">connect@arogyaayurveda.ae</a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="w-5 h-5 shrink-0" />
                <span>Monday - Sunday ( 9:00AM - 9:00PM )</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-serif text-ivory tracking-[0.05em] text-xl font-bold mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4 flex-wrap">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center hover:bg-forest-dark hover:text-ivory hover:border-forest-dark transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center hover:bg-forest-dark hover:text-ivory hover:border-forest-dark transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Phone */}
              <a href="tel:+971545811966" aria-label="Phone" className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center hover:bg-forest-dark hover:text-ivory hover:border-forest-dark transition-all duration-300">
                <Phone className="w-4 h-4" />
              </a>
              {/* Mail */}
              <a href="mailto:connect@arogyaayurveda.ae" aria-label="Mail" className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center hover:bg-forest-dark hover:text-ivory hover:border-forest-dark transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/971545811966" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center hover:bg-forest-dark hover:text-ivory hover:border-forest-dark transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ivory/20 text-center md:text-left text-xs tracking-wider uppercase text-ivory/70 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Arogya Ayurveda. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-forest-dark transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-forest-dark transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
