import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ContentButtonOverrideStyle } from '../../shared-theme/overrides';

export default function HomeHero() {
  return (
    <Box
      id="hero"
      sx={theme => ({
        width: '100%',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          fontSize={'1.1rem'}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontSize: '2rem',
            }}
          >
            Find a dentist. Fast.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              width: { sm: '100%', md: '80%' },
              fontWeight: 500,
            }}
          >
            Making it easy to access dental care, by bringing local dentists
            together.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              width: { sm: '100%', md: '80%' },
              fontWeight: 500,
            }}
          >
            Brush scrubs away the stress of ringing around for a dentist. See
            all the free slots near you in a flash.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <Button
              variant="outlined"
              color="info"
              size="medium"
              href="http://trybrush.redfiredigital.uk"
              sx={ContentButtonOverrideStyle}
            >
              Search Here
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
