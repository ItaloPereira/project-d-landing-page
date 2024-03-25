import { ImageResponse } from 'next/og'
import CssBaseline from '@mui/material/CssBaseline';
import Hero from '@/components/sections/Hero';

import ThemeWrapper from '@/themes/';

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Apresentação do Artista'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

import { getPageData } from '@/data/page';
 
// Image generation
export default async function Image() {
  const data = await getPageData();
  
  const {
    theme,
    primary_color,
    title,
    logo_url,
    featured_img_url,
    featured_text,
  } = data;
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <ThemeWrapper theme={theme} primaryColor={primary_color}>
        <CssBaseline />
        <Hero
          title={title}
          logoUrl={logo_url}
          featuredImgUrl={featured_img_url}
          featuredText={featured_text}
        />
      </ThemeWrapper>
    ),
    {
      ...size,
    }
  )
}