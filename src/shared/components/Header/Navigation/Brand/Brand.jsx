import { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateBrandWidth } from '../../../../../redux/operations/widthOperation';
import { useTheme } from '@emotion/react';

const Brand = ({ isSmallScreen }) => {
  const theme = useTheme();
  const brandRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateWidth = () => {
      if (brandRef.current) {
        const computedStyle = window.getComputedStyle(brandRef.current);
        const width = brandRef.current.offsetWidth;
        const paddingLeft = parseFloat(computedStyle.paddingLeft);
        const paddingRight = parseFloat(computedStyle.paddingRight);
        const borderLeft = parseFloat(computedStyle.borderLeftWidth);
        const borderRight = parseFloat(computedStyle.borderRightWidth);
        const totalWidth =
          width + paddingLeft + paddingRight + borderLeft + borderRight;
        dispatch(updateBrandWidth(totalWidth));
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [dispatch]);

  const brandNameStyles = {
    color: theme.palette.text.secondary,
    mr: isSmallScreen ? 'auto' : '18px',
    p: '0 14px',
  };

  return (
    <Typography ref={brandRef} component="p" sx={brandNameStyles}>
      kulzhynskyi-kostiantyn
    </Typography>
  );
};

export default Brand;
