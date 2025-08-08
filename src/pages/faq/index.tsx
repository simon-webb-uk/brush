import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';
import FaqHero from './FaqHero';

export default function FaqPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />

      <div>
        <FaqHero />
        {/* <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Divider />*/}
        <Footer />
      </div>
    </AppTheme>
  );
}
