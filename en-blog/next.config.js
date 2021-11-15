const withNextra = require('nextra')({
  theme: '@geekplux/nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
})
module.exports = {
  images: {
    domains: ['geekpluxblog.oss-cn-hongkong.aliyuncs.com']
  },
  ...withNextra()
}
