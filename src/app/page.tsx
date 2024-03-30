import type { Metadata } from 'next'
import { headers } from 'next/headers';

import CssBaseline from '@mui/material/CssBaseline';

import Hero from '@/components/sections/Hero';
import TextMidia from '@/components/sections/TextMidia';
import ExternalSong from '@/components/sections/ExternalSong';

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
      <ExternalSong spotifySongUrl='https://open.spotify.com/track/4EuqfssnCCNYb4UrR1Un8Z?si=9fa28f59073145ee' />

    </ThemeWrapper>
  );
}


export default HomePage;