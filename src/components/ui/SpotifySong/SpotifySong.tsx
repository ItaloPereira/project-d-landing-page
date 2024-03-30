'use client'

import { Spotify } from 'react-spotify-embed'
import Box from '@mui/material/Box';

import styles from './spotifySongStyles';

interface SpotifySongProps {
  songUrl: string;
}

const SpotifySong = (props: SpotifySongProps) => {
  const { songUrl } = props;

  return (
    <Box sx={styles.SpotifySong}>
      <Spotify width="100%" height="100%" link={songUrl} />
    </Box>
  )
}

export default SpotifySong;