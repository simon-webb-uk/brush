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
  cssVariables: { cssVarPrefix: 'template' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '20px', // now 1rem = 20px; 1.6rem ≈ 32px
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#666',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F26D24', // 👈 Site background color
      paper: '#F26D24', // 👈 Background for MUI Paper components
    },
    text: {
      primary: '#fff', // 👈 Default font colour
      secondary: '#ffffff99', // 👈 Optional: subtler text (used in MUI Typography color="text.secondary")
    },
  },

  typography: {
    fontFamily: siteFont.style.fontFamily,

    body2: {
      color: '#ffffffcc',
    },
  },
});

export default theme;
