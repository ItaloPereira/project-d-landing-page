import { ImageResponse } from 'next/og';
import { headers } from 'next/headers';

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
  
  const host = headers().get('host');
  const protocol = headers().get('x-forwarded-proto');
 
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${protocol}://${host}${data.featured_img_url})`,
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            marginTop: 300,
            width: 464,
            height: 600,
            backgroundImage: `url(${protocol}://${host}${data.logo_url})`,
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}