import type { Metadata } from 'next'
import { headers } from 'next/headers';

import CssBaseline from '@mui/material/CssBaseline';

import Hero from '@/components/sections/Hero';
import TextMidia from '@/components/sections/TextMidia';
import ExternalSong from '@/components/sections/ExternalSong';
import ImageSlider from '@/components/sections/ImageSlider';
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

  const partyImages = ['/content-managed/parties/its-mustaj.png', '/content-managed/parties/its-mustaj-2.png', '/content-managed/parties/after-mc-daniel.png', '/content-managed/parties/a-volta-do-inferninho.png', '/content-managed/parties/resenha-proibidao.png', '/content-managed/parties/paulin-da-capital.png', '/content-managed/parties/despedida-stiffler.png', '/content-managed/parties/resenha.png', '/content-managed/parties/projeto-x.png'];

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

      <ImageSlider images={partyImages} />

      <HireCta />

      <Footer
        title={title}
        logoUrl={logo_url}
      />

      

    </ThemeWrapper>
  );
}


export default HomePage;