const YEAR = new Date().getFullYear()
const SITE = 'GeekPlux'
const CUSDIS_APP_ID = 'b0e48772-478b-4a76-8a92-5c7ccb0eb107'
const DESCRIPTION =
  'Data Visualization & Full-stack programmer @ finance firm, always exploring'
const KEYWORDS = 'Web,JavaScript,Code,Computer Science,Geek,Data Visualization'
const TWITTER = 'https://twitter.com/geekplux'
const DOMAIN = 'geekplux.me'

const api = 'https://i.microlink.io/'
const cardUrl = (title) =>
  `https://cards.microlink.io/?preset=chrisbiscardi&subtitle=${DOMAIN}&name=${SITE}&title=${title}`
const coverImage = (title) => `${api}${encodeURIComponent(cardUrl(title))}`

export default {
  readMore: '↗',
  darkMode: true,
  cusdis: {
    appId: CUSDIS_APP_ID
  },
  head: ({ meta }) => {
    const title = meta.title ? `${meta.title} - ${SITE}` : SITE
    const description = meta.description || DESCRIPTION
    const keywords = meta.tag || KEYWORDS
    const author = meta.author || SITE
    const cover = meta.cover ? meta.cover : coverImage(meta.title || SITE)
    const type = meta.date ? 'article' : 'website'
    return (
      <>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta property="og:image" content={cover} />
        <meta name="twitter:image" content={cover} />
        <meta itemProp="image" content={cover} />
        <meta property="og:type" content={type} />
        {meta.date && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "image": [
        "${cover}"
       ],
      "datePublished": "${meta.date}",
      "dateModified": "${meta.date}",
      "author": {
          "@type": "Person",
          "name": "${author}",
          "url": "${TWITTER}"
        }
    }
        `
            }}
          ></script>
        )}
      </>
    )
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: 'help' }}
      >
        CC BY-NC 4.0
      </abbr>{' '}
      <time>{YEAR}</time> © {SITE}
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
