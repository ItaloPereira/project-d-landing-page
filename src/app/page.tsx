import type { Metadata } from 'next'

import CssBaseline from '@mui/material/CssBaseline';
import Hero from '@/components/sections/Hero';

import ThemeWrapper from '@/themes/';

import { getPageData } from '@/data/page';

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getPageData();

  return {
    title: data.title,
    description: data.featured_text,
    openGraph: {
      images: [data.featured_img_url],
    },
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
    </ThemeWrapper>
  );
}


export default HomePage;