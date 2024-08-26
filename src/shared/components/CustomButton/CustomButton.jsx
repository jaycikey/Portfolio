import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';

const CustomButton = ({ variant, children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant={variant} {...props}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
