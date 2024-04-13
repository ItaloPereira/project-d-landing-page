import type { Theme } from '@mui/material/styles';

const styles = {
  ImageSlider: (theme: Theme) => ({
    paddingTop: 6,
    textAlign: 'center',
  
    [theme.breakpoints.up('md')]: {
      paddingTop: 10,
    },
  }),
  ImageSlider__Container: (theme: Theme) => ({
    '.swiper-slide': {
      width: 'fit-content',
    }
  }),
  ImageSlider__ImageBox: (theme: Theme) => ({
    position: 'relative',
    width: 337.5,
    height: 600,
  }),
  Rtf: (theme: Theme) => ({
    margin: '0 auto !important',
    maxWidth: '600px',

    '& strong': {
      color: 'primary.main'
    },
  }),
}

export default styles;
