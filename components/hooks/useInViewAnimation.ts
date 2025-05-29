import { useEffect } from 'react';

interface UseInViewAnimationOptions extends IntersectionObserverInit {
  className?: string;
}

/**
 * Adds a class to the element when it comes into view using IntersectionObserver.
 * @param ref - React ref to the element
 * @param options - IntersectionObserver options and className to add (default: 'animate-in')
 */
export function useInViewAnimation(
  ref: React.RefObject<Element>,
  options: UseInViewAnimationOptions = {}
) {
  useEffect(() => {
    const { className = 'animate-in', ...observerOptions } = options;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      observerOptions
    );
    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [ref, options]);
} 