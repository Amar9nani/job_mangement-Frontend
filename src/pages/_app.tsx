// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '../styles/globals.css';

const theme = createTheme({
 // colorScheme: 'light',
  primaryColor: 'violet',
  defaultRadius: 'md',
  colors: {
    violet: [
      '#f5f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b699ff',
      '#9c73ff',
      '#824dff',
      '#6827ff',
      '#5a00ff',
      '#4d00db',
      '#4000b8'
    ]
  },
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      {/* <DatesProvider>
      
      </DatesProvider> */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}