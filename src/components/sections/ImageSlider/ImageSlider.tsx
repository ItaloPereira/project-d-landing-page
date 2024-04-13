'use client';

import Image from '@/components/ui/Image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/autoplay';

import styles from './imageSliderStyles';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = (props: ImageSliderProps) => {
  const { images } = props;

  return (
    <Box sx={styles.ImageSlider} component="section">
      <Container maxWidth="md">
        <Stack mb={3}>
          <Typography variant='h3' component='h2'>
            Mustaj na sua Cidade!
          </Typography>
          <Typography sx={styles.Rtf} component="div" variant='body1'>
            <p>
              Alguns lugares onde Mustaj marcou presença:
            </p>
          </Typography>
        </Stack>
      </Container>
      <Box sx={styles.ImageSlider__Container}>
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          speed={1000}
          modules={[Autoplay]}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Box sx={styles.ImageSlider__ImageBox}>
                <Image
                  src={image}
                  alt="party"
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default ImageSlider;