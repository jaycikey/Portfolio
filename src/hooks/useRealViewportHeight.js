import { useEffect } from 'react';

const useRealViewportHeight = () => {
  useEffect(() => {
    const setRealHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setRealHeight();
    window.addEventListener('resize', setRealHeight);
    window.addEventListener('orientationchange', setRealHeight);

    return () => {
      window.removeEventListener('resize', setRealHeight);
      window.removeEventListener('orientationchange', setRealHeight);
    };
  }, []);
};

export default useRealViewportHeight;
