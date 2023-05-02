import { useEffect } from 'react';
import disableScroll from 'disable-scroll';

export function useLockBodyScroll() {
  useEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    disableScroll.on();

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
      disableScroll.off();
    };
  }, []);
}
