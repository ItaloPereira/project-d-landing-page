'use client';

import { Roboto } from 'next/font/google';

import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const getInkiTheme = (primaryColor: string): ThemeOptions => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: primaryColor,
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    }
  }
}

const inkiTheme = (primaryColor: string) => createTheme(getInkiTheme(primaryColor));

export default inkiTheme;