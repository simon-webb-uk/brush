import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />

      <div>
        <ContactHero />
        {/* <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ /> */}
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
