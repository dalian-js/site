const YEAR = new Date().getFullYear()
const SITE = 'GeekPlux'
const CUSDIS_APP_ID = '69828d4f-0692-405b-9087-82249312acd6'
const DESCRIPTION = '数据可视化 & 全栈程序员 @ 金融公司，always exploring'
const KEYWORDS =
  '数据,随想,代码,金融,极客,可视化,Web,JavaScript,Code,Computer Science,Geek,Data Visualization'
const IMAGE =
  'https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/avatar.jpg?x-oss-process=style/zip'
const TWITTER = 'https://twitter.com/geekplux'
const DOMAIN = 'geekplux.com'

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
