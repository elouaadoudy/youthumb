import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Add your Google Analytics tracking code here */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P54R920DWK"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'YOUR_TRACKING_ID');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'lightgray' }}>
            <h1>YouTube Thumbnail Downloader</h1>
            {/* Add the rest of your content here */}
            {/* ... Your content ... */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
