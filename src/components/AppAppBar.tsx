import * as React from 'react';
import { styled, alpha, SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import { Link } from '../Link';
import { ButtonOverrideStyle } from '../shared-theme/overrides';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  border: 'none',
  boxShadow: 'none',
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const MenuTextItemOverride: SxProps = {
    color: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.75)',
      backgroundColor: 'transparent',
    },
  };

  return (
    <AppBar
      id="app-bar"
      position="static"
      enableColorOnDark
      sx={{
        boxShadow: 'none',
        bgcolor: 'white',
        backgroundImage: 'none',
      }}
    >
      <Container id="toolbar-container">
        <StyledToolbar id="styled-toolbar" variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pr: 3,
            }}
          >
            <Sitemark />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Button
                variant="text"
                color="info"
                size="small"
                href="http://trybrush.redfiredigital.uk"
                sx={MenuTextItemOverride}
              >
                Find Dentist
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                href="/practices"
                sx={MenuTextItemOverride}
              >
                For Practices
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={MenuTextItemOverride}
                href="/about"
              >
                About Us
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={MenuTextItemOverride}
                href="/contact"
              >
                Contact
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={MenuTextItemOverride}
                href="/faq"
              >
                FAQs
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button
              variant="outlined"
              color="info"
              size="medium"
              href="http://trybrush.redfiredigital.uk"
              sx={ButtonOverrideStyle}
            >
              Book Now
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>
                  <Link href="http://trybrush.redfiredigital.uk">
                    Find Dentist
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/practices">For Practices</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/about">About Us</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/contact">Contact</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/faq">FAQ</Link>
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    href="http://trybrush.redfiredigital.uk"
                  >
                    Join Now
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
