import "../styles/index.css";
import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import initializeGTM from '../utils/gtm'; // Import initializeGTM function
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-P54R920DWK'); // Replace with your Google Analytics tracking ID
    initializeGTM(); // Initialize Google Tag Manager
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    ReactGA.pageview(window.location.pathname);
  }, [Component]);

  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
