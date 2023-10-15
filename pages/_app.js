import "../styles/index.css";
import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import ReactGA from 'react-ga'; // Import react-ga

function MyApp({ Component, pageProps }) {
  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize('G-P54R920DWK'); // Replace 'YOUR_TRACKING_ID' with your actual tracking ID
  }, []);

  // Track page views when the route changes
  useEffect(() => {
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
