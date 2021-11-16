const withNextra = require('nextra')({
  theme: '@geekplux/nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  images: {
    domains: ['geekpluxblog.oss-cn-hongkong.aliyuncs.com']
  },
  ...withNextra(),
  // ...withBundleAnalyzer({}),
}
