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
import { List, ListItem } from '@mui/material';

export default function PracticesHero() {
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
            Maximise Capacity,
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
              Minimise Hassle
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            NHS funding cuts and last-minute cancellations mean lost income and
            empty slots. Brush reduces administrative burdens by streamlining
            appointment management and helping independent network practices
            maximise capacity. Join our growing network, starting with
            Gloucestershire and Surrey.
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Join our network and help us transform dental care. Email{' '}
            <a href="mailto:join@trybrush.com">join@trybrush.com</a>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
