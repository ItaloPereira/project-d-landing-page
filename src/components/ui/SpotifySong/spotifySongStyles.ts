import type { Theme } from '@mui/material/styles';

const styles = {
  SpotifySong: (theme: Theme) => ({
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
  // Iframe: {
  //   border: 'none',
  // }
}

export default styles;
