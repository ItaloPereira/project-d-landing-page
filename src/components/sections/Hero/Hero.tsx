'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { Theme } from '@mui/material/styles';

type ImageStyles = NonNullable<JSX.IntrinsicElements['img']['style']>;

interface HeroProps {
  title: string;
  logoUrl: string;
  featuredImgUrl: string;
  featuredText: string;
}

const Hero__Background = {
  backgroundColor: 'primary.darker',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const Hero__Image__Box = {
  position: 'relative',
  margin: '0 auto',
  maxWidth: 268,
  width: '100%',
  height: 472,
}

const Hero__Image: ImageStyles = {
  objectFit: 'contain',
  objectPosition: 'bottom center',
}

const Hero__Logo__Box = {
  position: 'relative',
  margin: '0 auto',
  maxWidth: 198,
  width: '100%',
  height: 109,
}

const Hero__Logo: ImageStyles = {
  objectFit: 'contain',
  objectPosition: 'center',
}

const Hero__Image__Background = (theme: Theme) => ({
  background: `linear-gradient(0deg, ${theme.palette.primary.darker} 25%, transparent 72%)`,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const Hero__LogoBox = {
  position: 'relative',
  top: '-186px',
}

const Hero__Text = {
  maxWidth: 265,
  margin: '0 auto',
  mt: 2,
  color: 'primary.contrastText',
  textAlign: 'center',
  fontStyle: 'italic',
};

const Hero = (props: HeroProps) => {
  const { logoUrl, featuredImgUrl, featuredText, title } = props;

  return (
    <Box id="hero" component="section" position="relative" pt={6}>
      <Box sx={Hero__Background} />
      <Container>
        <Stack position="relative">
          <Box sx={Hero__Image__Box}>
            
            <Image
              src={featuredImgUrl}
              alt={`Foto do Presskit do ${title}`}
              fill
              style={Hero__Image}
            />
            <Box sx={Hero__Image__Background} />

          </Box>

          <Box sx={Hero__LogoBox}>

            <Box sx={Hero__Logo__Box}>
              <Image
                src={logoUrl}
                alt={`Logo do ${title}`}
                fill
                style={Hero__Logo}
              />
            </Box>

            <Typography sx={Hero__Text} variant='h5'>
              {featuredText}
            </Typography>

          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero;