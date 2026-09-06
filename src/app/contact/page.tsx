"use client";
import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Basic validation
    if (!phone || phone.length < 8) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    const whatsappMessage = `Hello Arogya Ayurveda, I would like to book an appointment.\n\nName: ${name || 'N/A'}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nMessage: ${message || 'N/A'}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/971545811966?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    (e.target as HTMLFormElement).reset();
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

            {status === 'success' ? (
              <div className="bg-forest-light text-forest-dark p-6 rounded-xl border border-forest-soft mb-6">
                <h3 className="font-serif text-xl mb-2 font-semibold">Thank you for reaching out!</h3>
                <p>We have received your request and will contact you shortly to confirm your appointment.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-forest-primary font-medium hover:underline"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}
                
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

                <div className="flex items-center space-x-3 mb-2">
                  <input 
                    type="checkbox" 
                    id="human" 
                    name="human" 
                    required 
                    className="w-5 h-5 text-forest-primary rounded border-forest-primary/20 focus:ring-forest-primary cursor-pointer"
                  />
                  <label htmlFor="human" className="text-sm font-medium text-forest-primary cursor-pointer select-none">
                    I am not a robot <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className={`w-full py-4 text-lg mt-4 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Location Details */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-forest-primary/5 bg-cream flex flex-col items-center justify-center p-8 lg:p-12 h-full min-h-[400px] relative">
             {/* Decorative background element */}
             <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-forest-primary">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                 <circle cx="12" cy="10" r="3"></circle>
               </svg>
             </div>
             
             <div className="bg-white/95 backdrop-blur-md px-8 py-8 rounded-2xl shadow-xl z-10 w-full max-w-sm border border-forest-primary/10 text-center">
               <h3 className="font-serif text-2xl text-forest-dark font-semibold mb-3">Arogya Ayurveda<br/>Health Care</h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-6">
                 Ji'dan St - Mohamed Bin Zayed City<br/>
                 Abu Dhabi, United Arab Emirates
               </p>
               <a 
                 href="https://www.google.com/maps/place/?q=place_id:ChIJcU3VnUpHXj4RmrLrNOoLZ_k" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center w-full bg-forest-primary hover:bg-forest-dark text-white py-3 rounded-xl font-medium transition-colors shadow-md"
               >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 Get Directions
               </a>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
