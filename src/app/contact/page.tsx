"use client";
import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-24 lg:pt-32 bg-cream text-text-dark">
      
      {/* Header Section */}
      <div className="w-full bg-forest-primary text-ivory py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl font-light text-ivory/80 max-w-2xl mx-auto">
          We are here to assist you on your journey to wellness. Reach out to schedule a consultation or ask any questions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-forest-primary/5">
            <h2 className="text-3xl font-serif text-forest-primary mb-2">Book an Appointment</h2>
            <p className="text-sm text-text-muted mb-8">Fields marked with an <span className="text-red-500">*</span> are required</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-forest-primary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 rounded-xl border border-forest-primary/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-forest-primary">Phone <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-forest-primary/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-forest-primary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 rounded-xl border border-forest-primary/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-forest-primary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-forest-primary/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4">
                Submit Request
              </Button>
            </form>
          </div>

          {/* Right Column: Google Map */}
          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-forest-primary/5 bg-white flex flex-col relative">
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg z-10 w-[90%] md:w-auto">
               <h3 className="font-serif text-xl text-forest-primary font-semibold mb-1">Arogya Ayurveda</h3>
               <p className="text-text-muted text-sm leading-relaxed">
                 Mohamed Bin Zayed City<br/>
                 Abu Dhabi, United Arab Emirates
               </p>
             </div>
             
             {/* Note: Embedding via maps.google.com/maps?q=lat,lng&output=embed is standard for no API key map embeds. */}
             <iframe
               title="Google Maps Location"
               src="https://maps.google.com/maps?q=24.3477563,54.5534295&hl=en&z=13&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0, minHeight: '500px' }}
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

        </div>
      </div>
    </main>
  );
}
