// src/components/animations/Cursor.tsx
'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor only after user moves mouse (prevents initial position flash)
    const delayedVisibility = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateCursorStyle = () => {
      const target = document.querySelector(':hover') as HTMLElement;
      
      // Check if hovering over clickable elements
      const isHoverable = target?.matches('a, button, [role="button"], input, select, textarea, label, [tabindex]:not([tabindex="-1"])');
      setIsPointer(!!isHoverable);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };

    // Track cursor position
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Track hoverable elements
    document.addEventListener('mouseover', updateCursorStyle);
    
    // Track mouse buttons
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Track mouse leaving window
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(delayedVisibility);
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', updateCursorStyle);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Only render on client side and when visible
  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          backgroundColor: isActive ? 'rgba(52, 211, 153, 1)' : 'white',
        }}
      />
      <div 
        className="cursor-outline"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          borderColor: isPointer ? 'rgba(52, 211, 153, 0.8)' : 'rgba(255, 255, 255, 0.5)',
          opacity: isActive ? 0.5 : 1,
        }}
      />
    </>
  );
}