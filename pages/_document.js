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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <!-- Add the provided text below this line -->
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p><strong>Save YT Video Thumbnails:</strong> Get free thumbnail images of any YouTube videos in various resolutions, including Full HD (1080), HD (720), SD, and smaller sizes. Supported video formats include YouTube (HD, HQ, 1080p, 4K) videos.</p>

            <h2>What is the purpose of this YouTube Thumbnail Grabber website?</h2>
            <p>People use this YouTube thumbnail downloader website to extract thumbnails from YouTube videos. These thumbnails can be utilized in presentations, animations, and various creative projects.</p>

            <h2>How to use this YouTube Thumbnail Downloader website?</h2>
            <ol>
              <li><strong>Copy Video URL:</strong> Begin by copying the URL of the YouTube video whose thumbnail you want to download.</li>
              <li><strong>Paste URL:</strong> Paste the URL into the provided input box on our website.</li>
              <li><strong>Thumbnail Generation:</strong> As soon as you paste the link, our website will automatically generate thumbnails in different sizes.</li>
              <li><strong>Download:</strong> Click on the thumbnail you prefer and download it to your device. If you're using an Android phone, save the images directly. For iPhone users, the process may differ.</li>
            </ol>

            <h2>Is it legal to download YouTube thumbnails?</h2>
            <p>Downloading YouTube video thumbnails is legal. However, it's essential to remember that both the thumbnail and video are copyrighted materials. If you intend to reuse them, you should seek proper permissions from the content owner.</p>

            <h2>Compatibility of this YT Thumbnail Grabber website</h2>
            <p>Our YouTube Thumbnail Downloader website is compatible with most devices, including Android devices and desktop/laptop systems. However, iPhone users may face limitations due to iOS restrictions. Jailbroken iPhones may have more flexibility.</p>

            <h2>Is there a Copyright risk associated with YouTube Thumbnails?</h2>
            <p>YouTube thumbnails are copyrighted materials owned by the respective video owners. If you plan to use them in your work, it's advisable to seek permission, especially if you intend to reuse them on YouTube. However, using them for other purposes, such as website logos or graphic design, typically poses fewer copyright risks.</p>

            <h2>Is reusing YouTube thumbnails SEO friendly?</h2>
            <p>Reusing YouTube thumbnails may not be SEO-friendly since Google indexes most thumbnails on YouTube, making it challenging to stand out. To improve the SEO-friendliness of reused thumbnails, consider adding unique effects or customizing them with software like Photoshop to make them distinctive and more search engine-friendly.</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
