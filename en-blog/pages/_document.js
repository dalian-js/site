import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      site: 'GeekPlux',
      url: 'https://geekplux.me',
      twitter: '@geekplux'
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:site_name" content={meta.site} />
          <meta property="og:url" content={meta.url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.twitter} />
          <meta name="twitter:creator" content={meta.twitter} />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="/feed.xml"
          />
          <link
            rel="preload"
            href="/fonts/Inter-roman.latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GA_ID}');
            `
            }}
          />
          <script
            async
            defer
            data-website-id={process.env.UMAMI_ID}
            src={process.env.UMAMI_URL}
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
