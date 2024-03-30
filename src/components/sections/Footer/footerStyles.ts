import type { Theme } from '@mui/material/styles';

const styles = {
  Footer: (theme: Theme) => ({
    backgroundColor: 'primary.darker',
    color: 'primary.contrastText',
    paddingBlock: theme.spacing(5, 7),
    textAlign: 'center',

    '& a': {
      color: 'primary.contrastText',
    },
  }),
  Footer__Logo__Box: (theme: Theme) => ({
    position: 'relative',
    margin: '0 auto',
    marginTop: 1,
    width: 200,
    height: 150,
  }),
}

export default styles;
