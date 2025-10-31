import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      id="footer-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 6 },
        px: { xs: 8, sm: 4 },
        textAlign: { sm: 'center', md: 'left' },
        color: 'primary.light',
        backgroundColor: '#333',
        width: '100%',
        maxWidth: '2000px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          maxWidth: '2000px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>Brush ® 2025</Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Product
          </Typography>
          <Link color="primary.contrastText" variant="body2" href="/faq">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{ pt: { xs: 4, sm: 0 }, fontWeight: 'bold' }}
          >
            Company
          </Typography>
          <Link color="primary.contrastText" variant="body2" href="/about">
            About us
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            pr: { xs: 8, sm: 2 },
          }}
        >
          <Typography
            variant="body2"
            sx={{ pt: { xs: 4, sm: 0 }, fontWeight: 'bold' }}
          >
            Legal
          </Typography>
          <Link color="primary.contrastText" variant="body2" href="/contact">
            Contact
          </Link>
          <Link color="primary.contrastText" variant="body2" href="/privacy">
            Privacy
          </Link>
          <Link color="primary.contrastText" variant="body2" href="/cookies">
            Cookies
          </Link>
          <Link color="primary.contrastText" variant="body2" href="/terms">
            T &amp; Cs
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
