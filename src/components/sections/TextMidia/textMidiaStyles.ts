import type { Theme } from '@mui/material/styles';

const styles = {
  TextMidia: (theme: Theme) => ({
    paddingBlock: 6,
  
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
    },
  }),
  MidiaBox: (theme: Theme) => ({
    height: '52vw',

    [theme.breakpoints.up('md')]: {
      height: '310px',
    },
  }),
  Rtf: (theme: Theme) => ({
    margin: '0 !important',

    '& strong': {
      color: 'primary.main'
    },
  }),
}

export default styles;
