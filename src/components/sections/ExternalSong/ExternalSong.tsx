'use client';
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import YoutubeVideo from '@/components/ui/YoutubeVideo';
import SpotifySong from '@/components/ui/SpotifySong';

import styles from './externalSongStyles';

interface ExternalSongProps {
  youtubeVideoId?: string;
  spotifySongUrl?: string;
}

const ExternalSong = (props: ExternalSongProps) => {
  const { youtubeVideoId, spotifySongUrl } = props;

  return (
    <Box sx={styles.ExternalSong} component="section">
      <Container maxWidth="md">
          <Grid container spacing={{xs: 3, md: 6}}>
            <Grid item xs={12} md={6}>
              {youtubeVideoId && (
                <Box sx={styles.YoutubeBox}>
                  <YoutubeVideo videoId={youtubeVideoId} />
                </Box>
              )}

              {spotifySongUrl && (
                <Box sx={styles.SpotifyBox}>
                  <SpotifySong songUrl={spotifySongUrl} />
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant='h3' component='h2' mb={4}>
                  Escute Agora
                </Typography>

                <Typography variant='h4' component='h3' mb={1}>
                  <strong>Gol Bolinha, Gol Quadrado 2 Versão Mandela</strong>
                </Typography>

                <Typography variant='h6' component='h4' color={(theme) => alpha(theme.palette.primary.contrastText, .6)}>
                  DJ MUSTAJ, Mc Pedrinho, Mc Renatinho Falcão
                </Typography>

              </Stack>
            </Grid>
          </Grid>
      </Container>
    </Box>
  )
}

export default ExternalSong;