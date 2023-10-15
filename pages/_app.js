import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  // Initialize Google Analytics with your tracking ID
  useEffect(() => {
    ReactGA.initialize('G-P54R920DWK');
  }, []);

  // Track page views on route changes
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
