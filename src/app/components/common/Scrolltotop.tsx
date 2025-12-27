import { useState, useEffect, useCallback, FC } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ threshold = 100 }) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > threshold) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= threshold) {
      setShowScroll(false);
    }
  }, [showScroll, threshold]);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(checkScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkScrollTop]);

  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showScroll) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={scrollTop}
        size="icon"
        variant="secondary"
        className="h-10 w-10 rounded-full shadow-lg bg-background hover:bg-background hover:scale-110 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
