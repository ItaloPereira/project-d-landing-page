'use client'

import Image from '@/components/ui/Image';
import { useState } from 'react';

import YouTube, { YouTubeProps }  from "react-youtube";

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

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  }

  return (
    <Box sx={styles.YoutubeVideo} onClick={() => setIsPlaying(true)}>
      {isPlaying ? (
        <YouTube className="youtube-video" videoId={videoId} opts={opts} onReady={onPlayerReady} id="video"/>
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