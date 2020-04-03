import theme from "../theme";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";
import { initGA, logPageView } from "./googleAnalytics.js";

class MyApp extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    this.props = { Component, pageProps };
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
