import type { Theme } from '@mui/material/styles';

import { alpha } from '@mui/material/styles';

const styles = {
  Hero: (theme: Theme) => ({
    position: 'relative',
    pt: 6,
    color: 'primary.contrastText',
    overflow: 'hidden',
    backgroundColor: 'primary.darker',
  
    [theme.breakpoints.up('md')]: {
      minHeight: '620px',
      height: '80vh',
      maxHeight: '750px',
    },
  }),
  
  Hero__BackgroundImage: (theme: Theme, logoUrl: string) => ({
    backgroundImage: `url(${logoUrl})`,
    backgroundSize: '10%',
    transform: 'rotate(30deg)',
    width: '200%',
    height: '200%',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    bottom: 0,
    right: 0,
    animation: 'moving 20s linear infinite',
  
    [theme.breakpoints.up('md')]: {
      backgroundSize: '5%',
      animation: 'moving 40s linear infinite',
    },

    "@keyframes moving": {
      "0%": {
        backgroundPosition: "0",
      },
      "100%": {
        backgroundPosition: "100%",
      }
    },
  }),

  Hero__BackgroundGradientOverlay: (theme: Theme) => ({
    background: `linear-gradient(0deg, ${theme.palette.primary.darker} 50%, ${alpha(theme.palette.primary.darker as string, 0.8)} 100%)`,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }),
  
  Hero__Stack: (theme: Theme) => ({
    position: 'relative',
  }),
  
  Hero__Image__Box: (theme: Theme) => ({
    position: 'relative',
    margin: '0 auto',
    width: 268,
    height: 472,
  
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      width: 324,
      height: 572
    },
  }),
  
  Hero__Logo__Box: (theme: Theme) => ({
    position: 'relative',
    margin: '0 auto',
    width: 198,
    height: 150,
  
    [theme.breakpoints.up('md')]: {
      width: 364,
      height: 200
    },
  }),
  
  Hero__Image__Background: (theme: Theme) => ({
    background: `linear-gradient(0deg, ${theme.palette.primary.darker} 25%, transparent 72%)`,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }),
  
  Hero__LogoBox: (theme: Theme) => ({
    position: 'relative',
    top: '-186px',
    height: 136,
  
    [theme.breakpoints.up('md')]: {
      top: '-25px',
      height: 'auto',
    },
  }),
  
  Hero__Text: {
    maxWidth: 265,
    margin: '0 auto',
    mt: 2,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  Hero__ButtonBox: (theme: Theme) => ({
    position: 'absolute',
    bottom: 16,
    width: '100%',
  }),
  
  ChevronDownIcon: (theme: Theme) => ({
    animation: 'jumpInfinite 1.5s infinite',
    "@keyframes jumpInfinite": {
      "0%": {
        transform: "translateY(-2px)"
      },
      "50%": {
        opacity: 1,
        transform: "translateY(2px)"
      },
      "100%": {
        opacity: 1,
        transform: "translateY(-2px)"
      }
    },
  }),
}

export default styles;
