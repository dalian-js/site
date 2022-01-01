const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { Feed } = require('feed')
const { marked } = require('marked')
const YEAR = new Date().getFullYear()

const SITE = 'GeekPlux'
const URL = 'https://geekplux.com'
// const DOMAIN = 'geekplux.com'
const AVATAR =
  'https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/avatar.jpg?x-oss-process=style/zip'
const DESCRIPTION = '数据可视化 & 全栈程序员 @ 金融公司，always exploring'
const FAV = 'https://geekplux.me/favicon.ico'
// const api = 'https://i.microlink.io/'
// const cardUrl = (title) =>
//   `https://cards.microlink.io/?preset=chrisbiscardi&subtitle=${DOMAIN}&name=${SITE}&title=${title}`
// const coverImage = (title) => `${api}${encodeURIComponent(cardUrl(title))}`

const feed = new Feed({
  title: SITE,
  description: DESCRIPTION,
  id: URL,
  link: URL,
  language: 'zh', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: AVATAR,
  favicon: FAV,
  copyright: `CC BY-NC 4.0 ${YEAR} @ ${SITE}`,
  // updated: new Date(2013, 6, 14), // optional, default = today
  // generator: 'awesome', // optional, default = 'Feed for Node.js'
  feedLinks: {
    // json: `${URL}/json`,
    atom: `${URL}/atom.xml`,
    feed: `${URL}/feed.xml`
  },
  author: {
    name: SITE,
    // email: '@',
    link: URL
  }
})

async function generate() {
  async function addFeedItem(name, type) {
    if (name.startsWith('index.')) return

    const content = await fs.readFile(
      path.join(__dirname, '..', 'pages', type, name)
    )
    const frontmatter = matter(content)
    const link = `/${type}/` + name.replace(/\.mdx?/, '')
    let tags = frontmatter.data.tag || frontmatter.data.tags || []
    tags = (Array.isArray(tags) ? tags : tags.split(',')).map((tag) =>
      tag.trim()
    )

    feed.addItem({
      id: link,
      title: frontmatter.data.title,
      url: link,
      link,
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      categories: tags,
      tags,
      content: marked.parse(frontmatter.content),
      // image: coverImage(frontmatter.data.title),
      author: [
        {
          name: SITE,
          // email: "@",
          link: URL
        }
      ]
    })
  }

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))
  const newsletters = await fs.readdir(
    path.join(__dirname, '..', 'pages', 'newsletters')
  )
  await Promise.all(posts.map(async (name) => addFeedItem(name, 'posts')))
  await Promise.all(
    newsletters.map(async (name) => addFeedItem(name, 'newsletters'))
  )

  await fs.writeFile('./public/feed.xml', feed.rss2())
  await fs.writeFile('./public/atom.xml', feed.atom1())
  await fs.writeFile('./public/feed.json', feed.json1())
}

generate()
