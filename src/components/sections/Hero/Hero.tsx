'use client';

import Image from '@/components/ui/Image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './heroStyles';

interface HeroProps {
  title: string;
  logoUrl: string;
  featuredImgUrl: string;
  featuredText: string;
}

const Hero = (props: HeroProps) => {
  const { logoUrl, featuredImgUrl, featuredText, title } = props;

  return (
    <Box sx={styles.Hero} id="hero" component="section">
      <Box sx={(theme) => styles.Hero__BackgroundImage(theme, logoUrl)} />
      <Box sx={styles.Hero__BackgroundGradientOverlay} />

      <Container maxWidth="md">
        <Stack
          direction={{ md: 'row' }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
          sx={styles.Hero__Stack}
        >
          <Box sx={styles.Hero__Image__Box}>
            
            <Image
              src={featuredImgUrl}
              alt={`Foto do Presskit do ${title}`}
              fill
              sizes='(min-width: 768px) 50vw, 100vw'
              objectPosition='bottom center'
            />
            <Box sx={styles.Hero__Image__Background} />

          </Box>

          <Box sx={styles.Hero__LogoBox}>

            <Box sx={styles.Hero__Logo__Box}>
              <Image
                src={logoUrl}
                alt={`Logo do ${title}`}
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
              />
            </Box>

            <Typography sx={styles.Hero__Text} variant='h5' component='h2'>
              {featuredText}
            </Typography>

          </Box>
        </Stack>
      </Container>

      <Stack sx={styles.Hero__ButtonBox} alignItems="center">
        <Button endIcon={<ExpandMoreIcon sx={styles.ChevronDownIcon} />} color="inherit">
          Descubra
        </Button>
      </Stack>
    </Box>
  )
}

export default Hero;