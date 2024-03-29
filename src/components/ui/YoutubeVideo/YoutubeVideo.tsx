'use client'

import Image from '@/components/ui/Image';
import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import styles from './youtubeVideoStyles';

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo = (props: YoutubeVideoProps) => {
  const { videoId } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box sx={styles.YoutubeVideo} onClick={() => setIsPlaying(true)}>
      {isPlaying ? (
        <iframe style={styles.Iframe} width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}?autoplay=true`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      ) : (
        <>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt="Thumbnail do vídeo do YouTube"
            objectFit='cover'
            fill
          />
          <Box sx={styles.PlayIconBox}>
            <IconButton sx={styles.PlayIcon} aria-label="play" size="large" color='inherit'>
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
    
  )
}

export default YoutubeVideo;