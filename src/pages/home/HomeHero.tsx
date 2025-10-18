import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';
import {
  ButtonOverrideStyle,
  ContentButtonOverrideStyle,
} from '../../shared-theme/overrides';

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
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
              fontWeight: 500,
            }}
          >
            Making it simple for families to access dental care with a national
            booking system for Private and NHS patients
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
              Book in Seconds – No Calls Needed
            </Button>
          </Stack>
          <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
            Endorsed by Peter and Emily Andre, champions of family health.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
