'use client';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import styles from './hireCtaStyles';

interface HireCtaProps {
}

const HireCta = (props: HireCtaProps) => {

  return (
    <Box sx={styles.HireCta} component="section">
      <Container maxWidth="md">
        <Stack>
          <Typography variant='h3' component='h2'>
            Contrate Agora para seu evento!
          </Typography>
          <Typography sx={styles.Rtf} component="div" variant='body1'>
              <p>
                Entre em contato diretamente com o artista pelo WhatsApp para checar orçamentos e disponibilidade.
              </p>
            </Typography>
          <Box>
            <Link target='_blank' href="https://wa.me/5553984546889?text=Gostaria+de+contratar+Mustaj%21" passHref>
              <Button startIcon={<WhatsAppIcon />} size='large' variant="contained">
                Falar com Mustaj
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default HireCta;