import { useEffect, useRef } from 'react';

export function MouseTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursor || !cursorRing) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Move the main cursor dot
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Move the outer ring with a slight delay for a smooth following effect
      requestAnimationFrame(() => {
        cursorRing.style.transform = `translate(${clientX}px, ${clientY}px)`;
      });
    };

    // Hide default cursor when mouse enters the window
    document.documentElement.style.cursor = 'none';
    
    window.addEventListener('mousemove', moveCursor);
    
    // Show cursor when mouse leaves the window
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorRing.style.opacity = '0';
    };

    // Show cursor when mouse enters the window
    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorRing.style.opacity = '1';
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorRingRef}
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}