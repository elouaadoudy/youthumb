import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import script from "next/script"

function MyApp({ Component, pageProps }) {
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

<script 
    strategy="afterInteractive"
    src="https://www.googletagmanager.com/gtag/js?id=G-P54R920DWK                                                                                                                           
/>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P54R920DWK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P54R920DWK');
</script>

      <Component {...pageProps} />
 
    </Fragment>
  );
}

export default MyApp;
