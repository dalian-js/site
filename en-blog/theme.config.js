const YEAR = new Date().getFullYear()
const SITE = 'GeekPlux'
const CUSDIS_APP_ID = 'b0e48772-478b-4a76-8a92-5c7ccb0eb107'

export default {
  readMore: '↗',
  darkMode: true,
  cusdis: {
    appId: CUSDIS_APP_ID
  },
  head: ({ title, meta }) => (
    <>
      {title && <meta property="og:title" content={`${meta.title} - ${SITE}`} />}
      {title && <meta name="twitter:title" content={`${meta.title} - ${SITE}`} />}
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.description && (
        <meta property="og:description" content={meta.description} />
      )}
      {meta.description && (
        <meta name="twitter:description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      {meta.cover ? (
        <meta property="og:image" content={meta.cover} />
      ) : (
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${meta.title} - ${SITE}.png`}
        />
      )}
      {meta.cover ? (
        <meta name="twitter:image" content={meta.cover} />
      ) : (
        <meta
          name="twitter:image"
          content={`https://og-image.vercel.app/${meta.title} - ${SITE}.png`}
        />
      )}
      {meta.cover ? (
        <meta itemProp="image" content={meta.cover} />
      ) : (
        <meta
          itemProp="image"
          content={`https://og-image.vercel.app/${meta.title} - ${SITE}.png`}
        />
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
