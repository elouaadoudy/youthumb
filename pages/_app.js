import "../styles/index.css";
import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-P54R920DWK', {
      debug: process.env.NODE_ENV === 'development', // Enable debug mode in development
    });
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    // Listen for route changes and call the handler
    if (typeof window !== 'undefined') {
      window.addEventListener('routeChangeComplete', handleRouteChange);
    }

    return () => {
      // Clean up the event listener
      if (typeof window !== 'undefined') {
        window.removeEventListener('routeChangeComplete', handleRouteChange);
      }
    };
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
