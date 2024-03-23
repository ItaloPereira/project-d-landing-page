'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import defaultTheme from './default'
import materialTheme from './material'
import inkiTheme from './inki'
import mustajTheme from './mustaj'

interface ThemeWrapperProps {
  children: ReactNode;
  theme: string;
  primaryColor: string;
}

export const themeTree = {
  default: defaultTheme,
  material: materialTheme,
  inki: inkiTheme,
  mustaj: mustajTheme,
}

export type AvailableThemes = keyof typeof themeTree;

const ThemeWrapper = (props: ThemeWrapperProps) => {
  const { children, theme, primaryColor } = props;
  const cTheme = themeTree[theme as AvailableThemes](primaryColor);

  return (
    <ThemeProvider theme={cTheme}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;