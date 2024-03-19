import type { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default RootLayout;