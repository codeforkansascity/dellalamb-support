import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageState } from '../contexts/PageStateContext';

export function useScrollPosition() {
  const location = useLocation();
  const { saveScrollPosition, getScrollPosition } = usePageState();
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const isRestoringRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Save scroll position when leaving this page
    const handleScroll = () => {
      if (!isRestoringRef.current) {
        saveScrollPosition(location.pathname, scrollContainer.scrollTop);
      }
    };

    // Restore scroll position when entering this page
    const restoreScrollPosition = () => {
      const savedPosition = getScrollPosition(location.pathname);
      if (savedPosition > 0) {
        isRestoringRef.current = true;
        scrollContainer.scrollTop = savedPosition;
        // Reset the flag after a brief moment
        setTimeout(() => {
          isRestoringRef.current = false;
        }, 100);
      }
    };

    // Add scroll listener
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    // Restore position after a brief delay to ensure content is rendered
    const timeoutId = setTimeout(restoreScrollPosition, 50);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, saveScrollPosition, getScrollPosition]);

  const setScrollContainer = (element: HTMLElement | null) => {
    scrollContainerRef.current = element;
  };

  return { setScrollContainer };
}
