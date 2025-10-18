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
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            ABOUT&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={theme => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              US
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Brush was born from a frustrating yet relatable experience. When
            nine-year-old Brontë, the niece of one of our founders, suffered a
            toothache during a visit to Sussex, her aunt and uncle struggled to
            find a dentist with an available appointment. Hours of phone calls
            to local practices yielded no results, until a cancellation at a
            surgery further afield allowed Brontë to be seen and smile again.
            This ordeal highlighted a gap in the UK’s dental care system.
            Inspired by this challenge, Brush was created to make dental care
            quick, fair, and accessible for everyone.
          </Typography>
          <h3>Mission</h3>
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
          <h3>Vision</h3>
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
