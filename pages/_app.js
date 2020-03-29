import theme from "../theme";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
