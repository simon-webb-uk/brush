import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AboutHero() {
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
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column' },
              alignItems: 'center',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontSize: '2rem',
            }}
          >
            Our Story So Far
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Brush was born from a painful experience. When the nine-year-old
            niece of one of our founders had a toothache while staying with
            them, her aunt and uncle couldn't find a dentist with an available
            appointment.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            After hours spent ringing round local dentists, it was thanks to a
            cancellation further afield that she could win back her smile.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            This ordeal highlighted a gap in the UK’s dental care system.
            Inspired by this challenge, Brush was created to make dental care
            quick, fair, and accessible for everyone.
          </Typography>
          <Typography variant="h3">Mission</Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            At Brush, we’re on a mission to simplify dental care access for
            families across the UK. We aim to eliminate the stress of endless
            phone calls and long waits by building a fully automated, realtime
            booking platform that connects patients with available dental
            appointments instantly.
          </Typography>
          <Typography variant="h3">Vision</Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            We envision a future where dental care is seamless, stress free, and
            equitable. Brush will be the leading national platform for dental
            appointment booking, empowering patients to find care when they need
            it and supporting dental practices by filling last minute
            cancellations and optimising schedules.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
