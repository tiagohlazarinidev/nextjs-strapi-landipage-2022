import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../../public/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
