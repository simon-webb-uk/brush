import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';
import HomeHero from './HomeHero';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <HomeHero />
      <div>
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
