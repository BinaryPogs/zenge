// src/components/sections/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Select all elements with data-speed attribute
      const parallaxLayers = containerRef.current.querySelectorAll('[data-speed]');
      
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat((layer as HTMLElement).dataset.speed || '0');
        
        // Calculate translation values based on mouse position and speed
        const xOffset = (x - 0.5) * speed * 50;
        const yOffset = (y - 0.5) * speed * 50;
        
        // Apply transform
        (layer as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden grid-pattern"
    >
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle accent */}
        <div 
          data-speed="0.5" 
          className="absolute w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl -top-20 -left-20"
        />
        
        {/* Grid lines for depth */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-zinc-800" data-speed="0.2" />
          <div className="absolute right-1/3 top-0 bottom-0 w-px bg-zinc-800" data-speed="0.2" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-zinc-800" data-speed="0.2" />
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-zinc-800" data-speed="0.2" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-zinc-800/80 px-4 py-1.5 text-sm">
              Frontend Developer & Designer
            </span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 max-w-5xl"
            data-speed="0.1"
          >
            Creating <span className="text-gradient">digital experiences</span> that blend design and technology
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10"
            data-speed="0.15"
          >
            I build modern web applications with focus on clean design, 
            smooth animations, and exceptional user experiences.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
            data-speed="0.2"
          >
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 text-sm mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-zinc-700 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}