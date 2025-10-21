import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor bundle load time
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0];
      console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
      console.log('DOM Content Loaded:', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};

export const measureComponentRender = (componentName) => {
  const start = performance.now();
  
  return () => {
    const end = performance.now();
    console.log(`${componentName} render time:`, end - start, 'ms');
  };
};
