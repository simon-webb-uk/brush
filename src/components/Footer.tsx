import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

function Copyright() {
  return (
    <Typography sx={{ color: 'primary.contrastText', mt: 1 }}>
      {'Copyright © Brush Limited. 2025'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
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
        backgroundColor: 'primary.main',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
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
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <img style={{ maxHeight: '90px' }} src="/footer-icon.png" />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
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
            sx={{ pt: { xs: 4, sm: 0 }, fontWeight: 'medium' }}
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
            sx={{ pt: { xs: 4, sm: 0 }, fontWeight: 'medium' }}
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 2, sm: 2 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Copyright />
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
