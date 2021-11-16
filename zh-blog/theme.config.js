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
  head: ({ title, meta }) => (
    <>
      {title ? (
        <>
          <meta property="og:title" content={`${meta.title} - ${SITE}`} />
          <meta name="twitter:title" content={`${meta.title} - ${SITE}`} />
        </>
      ) : (
        <>
          <meta property="og:title" content={SITE} />
          <meta name="twitter:title" content={SITE} />
        </>
      )}
      {meta.description ? (
        <>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta name="twitter:description" content={meta.description} />
        </>
      ) : (
        <>
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta name="twitter:description" content={DESCRIPTION} />
        </>
      )}
      {meta.tag ? (
        <meta name="keywords" content={meta.tag} />
      ) : (
        <meta name="keywords" content={KEYWORDS} />
      )}
      {meta.author ? (
        <meta name="author" content={meta.author} />
      ) : (
        <meta name="author" content={SITE} />
      )}
      {meta.cover ? (
        <>
          <meta property="og:image" content={meta.cover} />
          <meta name="twitter:image" content={meta.cover} />
          <meta itemProp="image" content={meta.cover} />
        </>
      ) : (
        <>
          <meta
            property="og:image"
            content={coverImage(title ? title : SITE)}
          />
          <meta
            name="twitter:image"
            content={coverImage(title ? title : SITE)}
          />
          <meta itemProp="image" content={coverImage(title ? title : SITE)} />
        </>
      )}
      {meta.date ? (
        <>
          <meta property="og:type" content="article" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "image": [
        "${meta.cover ? meta.cover : coverImage(title ? title : SITE)}"
       ],
      "datePublished": "${meta.date}",
      "dateModified": "${meta.date}",
      "author": {
          "@type": "Person",
          "name": "${meta.author || SITE}",
          "url": "${TWITTER}"
        }
    }
        `
            }}
          ></script>
        </>
      ) : (
        <meta property="og:type" content="website" />
      )}
    </>
  ),
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
