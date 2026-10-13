import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arogya Ayurveda | Ayurvedic Wellness in Abu Dhabi",
  description: "A modern Ayurvedic wellness experience in Abu Dhabi, rooted in traditional healing principles and personalized for your wellbeing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-text-dark relative overflow-x-hidden">
        {/* Global Leaf Backgrounds */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          {/* subtle overall texture */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply">
            <img src="/ayurvedic_bg.webp" alt="Background texture" className="w-full h-full object-cover object-center" />
          </div>
          
          {/* Left Branch */}
          <div className="absolute -top-[5%] -left-20 lg:-left-32 w-[300px] lg:w-[600px] h-[400px] lg:h-[800px] opacity-[0.35] mix-blend-multiply origin-left">
            <img src="/branch_left.webp" alt="Botanical leaf left" className="w-full h-full object-contain object-left-top" />
          </div>
          
        </div>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
