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
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqHero() {
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
          spacing={0}
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
            FA
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
              Qs
            </Typography>
          </Typography>
        </Stack>
        <Container
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <h2>General Questions</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>How does Brush work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Brush connects patients with available dental appointments
                instantly through an intuitive, real-time booking platform. No
                pre-registration is needed, just search by location, type of
                treatment (emergency, general, or cosmetic), and book in
                seconds.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Why was Brush created?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Inspired by a nine-year-old’s toothache ordeal in Sussex, Brush
                was born to eliminate the stress of endless phone calls and long
                waits, making dental care quick, fair, and accessible for
                everyone.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
        <Container
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <h2>Patient FAQs</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ width: '100%' }}
            >
              <Typography>Where can I use Brush?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The pilot launches in Cheltenham and Surrey across multiple
                locations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>What types of appointments can I book?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Book emergency, general/check-up, or cosmetic appointments. The
                platform rebooks cancelled slots in real-time to minimize wait
                times.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is Brush available for NHS patients?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, Brush supports both private and NHS patients, subject to
                availability
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Do I need to register to use Brush?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, our platform allows instant booking without
                pre-registration, making it as easy as booking a haircut or
                restaurant table.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
        <Container
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <h2>Cost and Pricing</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How much does it cost to use Brush?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It’s free for patients. Practices pay a subscription and fee per
                booking.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
        <Container
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <h2>Practices FAQs</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How does Brush benefit dental practices?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Brush reduces administrative burdens, rebooks cancelled slots
                (10% of appointments), and aims to boost surgery revenue by
                5-10%.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How can my practice join?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Contact us at
                <a href="mailto:join@trybrush.com">join@trybrush.com</a> to set
                up a call.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
        <Container
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <h2>Investment and Future</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>What’s the investment opportunity?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Brush is seeking seed investment for the Cheltenham pilot, with
                SEIS status offering tax reliefs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How can I learn more?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Email
                <a href="mailto:join@trybrush.com">join@trybrush.com</a> for
                further details or visit trybrush.com
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Container>
    </Box>
  );
}
