'use client'; // Important for client-side hooks

import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 768) { // Default breakpoint for tablets
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]); // Re-run if breakpoint changes

  return isMobile;
}
