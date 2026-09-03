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
    quote: "I came here with severe back pain and felt a noticeable improvement after just a few sessions. The doctors and therapists were professional, caring, and highly knowledgeable. I highly recommend this clinic.",
    rating: 5,
    name: "Praveen Kumar",
    location: "UAE",
  },
  {
    id: "2",
    quote: "\"A calm environment, experienced therapists, and authentic Ayurvedic treatments made my healing journey truly comfortable. I noticed positive changes in my stress levels, sleep, and overall well-being.",
    rating: 5,
    name: "Aswathy",
    location: "UAE",
  },
  {
    id: "3",
    quote: "From consultation to therapy, every step was handled with professionalism and compassion. I highly recommend Arogya Ayurveda Healthcare to anyone seeking safe, natural, and holistic healing.",
    rating: 5,
    name: "Renjith",
    location: "UAE",
  }
];
