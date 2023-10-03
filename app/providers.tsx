'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ChakraProvider>
    </CacheProvider>
  );
};
