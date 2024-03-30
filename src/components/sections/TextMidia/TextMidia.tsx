'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import YoutubeVideo from '@/components/ui/YoutubeVideo';

import styles from './textMidiaStyles';

interface TextImageProps {
}

const TextMidia = (props: TextImageProps) => {
  return (
    <Box sx={styles.TextMidia} component="section">
      <Container>
          <Grid container spacing={{xs: 3, md: 6}}>
            <Grid item xs={12} md={6}>
              <Box sx={styles.MidiaBox}>
                <YoutubeVideo videoId='7iPGwbSLsvg' />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant='h3' component='h2'>
                  Só o Mustaj tem o código...
                </Typography>

                <Typography sx={styles.Rtf} component="div" variant='body1'>
                  <p>
                    O primeiro e único <strong>DJ e programador</strong> da Região. Com mais de 6 anos de palco, Mustaj é um dos artistas mais conhecidos da região quando o assunto é <strong>Funk Mandelão</strong>.
                  </p>

                  <p>
                    Com diversos lançamentos e <strong>múltiplos dígitos</strong> de streams, Mustaj vem se destacando com seus hits que vem se tornando referência nos <strong>palcos das redondezas</strong>.
                  </p>
                </Typography>

              </Stack>
            </Grid>
          </Grid>
      </Container>
    </Box>
  )
}

export default TextMidia;