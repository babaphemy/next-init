import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface ScrollToTopProps {
  threshold?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 100 }) => {
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

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        transition: 'opacity 0.3s',
        opacity: showScroll ? 1 : 0,
        pointerEvents: showScroll ? 'auto' : 'none',
      }}
    >
      <IconButton
        onClick={scrollTop}
        color="primary"
        aria-label="scroll to top"
        sx={{
          backgroundColor: 'background.paper',
          boxShadow: 2,
          '&:hover': {
            backgroundColor: 'background.paper',
            opacity: 0.8,
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};

const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .scroll-button-enter {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default ScrollToTop;
