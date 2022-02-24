import { ThemeProvider } from 'Contexts/ThemeContext/ThemeContext';
import '../../styles/globals.css';
import '../../styles/additional.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
