'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { SaasProvider } from '@saas-ui/react';

export function Providers({ children, data }) {
  return (
    <CacheProvider>
      <SaasProvider>{children}</SaasProvider>
    </CacheProvider>
  );
}
