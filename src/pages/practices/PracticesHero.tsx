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
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
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
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            MAXIMISE CAPACITY,
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
              MINIMISE HASSLE
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            NHS funding cuts and last minute cancellations mean lost income and
            empty slots. Brush reduces administrative burdens by streamlining
            appointment management and helping independent network practices
            maximise capacity. Join our growing network, starting with
            Gloucestershire and Surrey.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          ></Typography>
          <List>
            <ListItem>
              Real time rebooking: Fill cancellations in seconds, boosting
              revenue.
            </ListItem>
            <ListItem>Marketplace tools: Compare prices</ListItem>
            <ListItem>
              AI Insights: Optimise schedules and early diagnosis for conditions
              like gum disease.
            </ListItem>
            <ListItem>
              Subscription of £79/month per network + £39/fee for each new
              confirmed booking.
            </ListItem>
          </List>
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
            <a href="mailto:network@trybrush.com">network@trybrush.com</a>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
