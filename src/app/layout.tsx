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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-text-dark relative">
        {/* Global Subtle Background Watermark */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-multiply">
          <img src="/ayurvedic_bg.jpg" alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
