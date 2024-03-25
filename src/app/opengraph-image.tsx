import { ImageResponse } from 'next/og'
import NextImage from 'next/image';
 
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
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      // <div 
      //   className='container'
      //   style={{
      //     background: 'white',
      //     width: '100%',
      //     height: '100%',
      //   }}>

      //   <div className='background'></div>

      //   <div className='container'>
      //     <div className='flex'>
      //       <div className='image-box'>
      //         {/* <NextImage
      //           src={data.featured_img_url}
      //           alt={`Foto do Presskit do ${data.title}`}
      //           fill
      //           style={{
      //             objectFit: 'contain',
      //             objectPosition: 'bottom center',
      //           }}
      //         /> */}
      //         <div className='image-gradient'></div>
      //       </div>

      //       <div className='logo-textimage'>
      //         <div className='logo-box'>
      //           {/* <NextImage
      //             src={data.logo_url}
      //             alt={`Logo do ${data.title}`}
      //             fill
      //             style={{
      //               objectFit: 'contain',
      //               objectPosition: 'center',
      //             }}
      //           /> */}
      //         </div>

      //         <div className='text'>
      //           <p>{data.featured_text}</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
        
      // </div>
      // <div 
      //   className='container'
      //   style={{
      //     background: 'white',
      //     width: '100%',
      //     height: '100%',
      //   }}
      // >
        <p>{data.featured_text}</p>
      // </div>
    ),
    {
      ...size,
    }
  )
}