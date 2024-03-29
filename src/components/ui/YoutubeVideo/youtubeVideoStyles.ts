import type { Theme } from '@mui/material/styles';

const styles = {
  YoutubeVideo: (theme: Theme) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    cursor: 'pointer',

    '.youtube-video': {
      height: '100%',
    }
  }),
  PlayIconBox: (theme: Theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
  PlayIcon: (theme: Theme) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    width: 65,
    height: 65,
    
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    }
  }),
  Iframe: {
    border: 'none',
  }
}

export default styles;
