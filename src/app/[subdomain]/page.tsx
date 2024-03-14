import { useState } from 'react';
import type { PaletteMode } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

import Features from '@/components/Features';
import AppAppBar from '@/components/AppAppBar';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

import { ThemeProvider } from '@mui/material/styles';

import { defaultTheme, materialTheme } from '@/getLPTheme';

async function getData(subdomain: string) {
  const res = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Z2te-ID5/LP?subdomain=${subdomain}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

const LandingPage = async ({ params }: { params: { subdomain: string } }) => {
  const data = await getData(params.subdomain);
  console.log('data => ', data);
  
  const { theme } = data;
  

  // const [mode, setMode] = useState<PaletteMode>('dark');
  // const [showCustomTheme, setShowCustomTheme] = useState(true);
  const mode = 'dark';

  // const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme(getDefaultTheme(mode));

  // const toggleColorMode = () => {
  //   setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  // };

  // const toggleCustomTheme = () => {
  //   setShowCustomTheme((prev) => !prev);
  // };

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : materialTheme}>
      {/* <AppAppBar mode={mode} toggleColorMode={() => {}} /> */}
      <CssBaseline />
      {/* <Hero /> */}
      {/* <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box> */}
      

      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
        <Pricing />

    </ThemeProvider>
  );
}

export default LandingPage;