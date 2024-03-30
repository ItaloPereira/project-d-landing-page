'use client';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactlessIcon from '@mui/icons-material/Contactless';

import Image from '@/components/ui/Image';

import styles from './footerStyles';

interface FooterProps {
  title: string;
  logoUrl: string;
}

const Footer = (props: FooterProps) => {
  const { logoUrl, title } = props;

  return (
    <Box sx={styles.Footer} id="footer" component="footer">
      <Container maxWidth="md">
        <Stack alignItems="center">
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Link target='_blank' href="https://open.spotify.com/artist/0Ga4butm53DwFt99iUoht5?si=NmjpeSsGR3iyahtX9j8h7w" passHref>
              <IconButton aria-label="spotify" size="large" color='inherit'>
                <ContactlessIcon fontSize="large" sx={{ transform: 'rotate(-90deg)' }} />
              </IconButton>
            </Link>
            
            <Link target='_blank' href="https://www.instagram.com/itsmustaj/" passHref>
              <IconButton aria-label="instagram" size="large" color='inherit'>
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Link>

            <Link target='_blank' href="https://www.youtube.com/@Itsmustaj" passHref>
              <IconButton aria-label="delete" size="large" color='inherit'>
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </Link>
          </Stack>

          <Box sx={styles.Footer__Logo__Box}>
            <Image
              src={logoUrl}
              alt={`Logo do ${title}`}
              fill
              sizes='(min-width: 768px) 50vw, 100vw'
            />
          </Box>

          <Box mt={3}>
            <Typography variant='body2'>
              © <strong>{title}</strong> 2024. Todos os direitos reservados.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;