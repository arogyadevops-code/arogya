export interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The entire experience felt calm, professional and deeply personalized. It's truly helped me feel more balanced in my everyday life.",
    rating: 5,
    name: "Sara M.",
    location: "Abu Dhabi",
  },
  // Add more testimonials here when provided by the business
];
