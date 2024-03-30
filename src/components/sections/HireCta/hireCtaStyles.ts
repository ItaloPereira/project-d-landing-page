import type { Theme } from '@mui/material/styles';

const styles = {
  HireCta: (theme: Theme) => ({
    paddingBlock: 6,
    textAlign: 'center',
  
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
    },
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
