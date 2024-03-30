import type { Metadata } from 'next'
import { headers } from 'next/headers';

import CssBaseline from '@mui/material/CssBaseline';

import Hero from '@/components/sections/Hero';
import TextMidia from '@/components/sections/TextMidia';
import ExternalSong from '@/components/sections/ExternalSong';
import HireCta from '@/components/sections/HireCta';
import Footer from '@/components/sections/Footer';

import ThemeWrapper from '@/themes/';

import { getPageData } from '@/data/page';

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getPageData();
  const host = headers().get('host');
  const protocol = headers().get('x-forwarded-proto');

  return {
    metadataBase: new URL(`${protocol}://${host}/`),
    title: data.title,
    description: data.featured_text
  }
}

const HomePage = async () => {
  const data = await getPageData();
  const {
    theme,
    primary_color,
    title,
    logo_url,
    featured_img_url,
    featured_text,
  } = data;

  return (
    <ThemeWrapper theme={theme} primaryColor={primary_color}>
      <CssBaseline />

      <Hero
        title={title}
        logoUrl={logo_url}
        featuredImgUrl={featured_img_url}
        featuredText={featured_text}
      />

      <TextMidia />

      <ExternalSong youtubeVideoId='l11-3lKuCPY' />

      <HireCta />

      <Footer
        title={title}
        logoUrl={logo_url}
      />

    </ThemeWrapper>
  );
}


export default HomePage;