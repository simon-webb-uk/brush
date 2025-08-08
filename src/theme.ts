import { Gabarito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const siteFont = Gabarito({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#F26D24',
    },
    secondary: {
      main: '#202125',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: siteFont.style.fontFamily,
  },
});

export default theme;
