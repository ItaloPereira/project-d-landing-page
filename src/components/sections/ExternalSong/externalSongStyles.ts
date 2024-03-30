import type { Theme } from '@mui/material/styles';

const styles = {
  ExternalSong: (theme: Theme) => ({
    backgroundColor: 'primary.dark',
    color: 'primary.contrastText',
    paddingBlock: 6,
  
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
    },
  }),
  YoutubeBox: (theme: Theme) => ({
    height: '52vw',

    [theme.breakpoints.up('md')]: {
      height: '226px',
    },
  }),
  SpotifyBox: (theme: Theme) => ({
    height: '354px',
  }),
}

export default styles;
