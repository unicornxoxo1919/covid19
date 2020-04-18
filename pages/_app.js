import theme from "../theme";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";
import GA from "../components/GA";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GA>
        <Navbar />
        <Component {...pageProps} />
      </GA>
    </ThemeProvider>
  );
};

export default MyApp;
