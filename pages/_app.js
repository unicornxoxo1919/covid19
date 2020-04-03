import theme from "../theme";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";
import { initGA, logPageView } from "../components/googleAnalytics";

class MyApp extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
