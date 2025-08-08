import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'Remy Sharp',
    occupation: 'Senior Engineer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Travis Howard',
    occupation: 'Lead Product Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Cindy Baker',
    occupation: 'CTO',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: 'Julia Stewart',
    occupation: 'Senior Engineer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: 'John Smith',
    occupation: 'Product Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'Daniel Wolf',
    occupation: 'CDO',
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function OurPeople() {
  const { mode, systemMode } = useColorScheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Who Are We?
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: 'flex' }}
          >
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
