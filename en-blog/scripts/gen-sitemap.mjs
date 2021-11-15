import fs from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

const URL = 'https://geekplux.me'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.mdx',
    'pages/**/*.mdx',
    'pages/**/*.md',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js'
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('posts/', 'posts/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')

                if (path === '/posts/index' || path === '/tags/[tag]') return ''

                return `
                        <url>
                            <loc>${`${URL}${path}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('./public/sitemap.xml', formatted)
}

generate()