'use client';

import { Roboto, Radley } from 'next/font/google';

import { createTheme, darken } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const radley = Radley({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface TypographyOptions {
    secondaryFontFamily: string;
  }
}


export const getMustajTheme = (primaryColor: string): ThemeOptions => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: primaryColor,
        contrastText: '#fff',
        darker: darken(primaryColor, 0.7),
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
      h3: {
        fontFamily: radley.style.fontFamily,
        lineHeight: 1,
      },
      h5: {
        fontFamily: radley.style.fontFamily,
      },
      body1: {
        fontSize: '1.125rem',
      }
    }
  }
}

const mustajTheme = (primaryColor: string) => createTheme(getMustajTheme(primaryColor));

export default mustajTheme;