// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/animations/Cursor';

// Define fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Creative developer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans relative">
        {/* Custom cursor like on bsodium.fr */}
        <CustomCursor />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Page content */}
        <main className="min-h-screen">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}