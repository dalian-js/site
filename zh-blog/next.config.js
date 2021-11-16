const withNextra = require('nextra')({
  theme: '@geekplux/nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  async redirects() {
    return [
      {
        source: '/:year((?!_next).*)/:month/:day/:slug',
        destination: '/posts/:slug',
        permanent: true
      },
      {
        source: '/projects',
        destination: '/project',
        permanent: true
      },
      {
        source: '/vlogs',
        destination: '/vlog',
        permanent: true
      },
      {
        source: '/r/bilibili',
        destination: 'https://space.bilibili.com/14962772',
        permanent: false
      },
      {
        source: '/r/youtube',
        destination: 'https://www.youtube.com/c/geekplux',
        permanent: false
      },
      {
        source: '/r/ukulele_tb',
        destination:
          'https://s.click.taobao.com/t?e=m%3D2%26s%3DgDkKxu66I2QcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67u6o2nOS1A%2BqNq%2BDna%2F8eQe0bnOE5sI2FJREl1ZWnSlVEBbV4GElPUCCqM57Udyji%2B4w2n5zbsGHBjJN14kefaszvnDZd7DRspzzi4oISwnIQqIUdq74UJPGDF1NzTQoPw%3D%3D&pvid=12_114.95.111.232_612_1564405321397',
        permanent: false
      },
      {
        source: '/r/ukulele_jd',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRtZEwsaB1AaWxQyEgFWHlgWBRIBVxhrUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgdTGF4WARUHUxlYJQZ6ADVuJHJZcXMJaCFMZ05TC1MEQkQeC2UaaxUDEwdTGVkSAxM3ZRtcJUN8AFIfUxUyEzdVH1wXChADXR9cEAsUN1IbUiVQT1kRTlgcBiI3ZRhrJTISN1YrGXsCRQJVTFkcVRFSVkxeE1VGDgUaU0ALEQVWTAhGCxUAUitZFAMWDg%3D%3D',
        permanent: false
      },
      {
        source: '/r/harmonica_tb',
        destination:
          'https://s.click.taobao.com/t?e=m%3D2%26s%3Dwt4NSOYyHJIcQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67mtGEzl0JIUnByy0g7RzMQe0bnOE5sI2FJREl1ZWnSlVEBbV4GElPUCCqM57UdyjiyqhM6spQCDbbNt%2BQ9Mb0tem2vAytx9kdEe4hP1V04HGOemaFM5tHHZ4CTHdso7N%2BygWkHBFDC0KO11W6mxekTsIv0wsbEmLog%3D%3D&scm=null&pvid=null&app_pvid=59590_11.8.75.83_472_1564405623897&ptl=floorId:17741;app_pvid:59590_11.8.75.83_472_1564405623897&union_lens=lensId:0b085f3c_0efa_16c3dd6e0e4_6cde',
        permanent: false
      },
      {
        source: '/r/harmonica_jd',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRtSFgQVAlQTUhEyFw9dG1wTBRQHURJrUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgJdE1sSBBUBVR9SJXsIQlJiJlxid3AJQR0WeEtVCUQ8HUQeC2UaaxUDEwdTGVkSAxM3ZRtcJUN8B1QbXxwHFwNlGmsVBhUCUBpeEAsbBlccaxICGzcHRgVRVxEOUStrJQEiN2UbaxYyUGkGHl0dBxFUXUgOQgEXU1ESCBQLEgdUEw4TUUEBAB5TFzIQBlQfUg%3D%3D',
        permanent: false
      },
      {
        source: '/r/hhkb_tb',
        destination:
          'https://s.click.taobao.com/t?e=m%3D2%26s%3DGlQPHHoMjM8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67p0XLWPuWkX3tTN3K9waqqi0bnOE5sI2FAkyzYGF1AB59vQTjUDOvGTNUi1AqCkIPApBt3MVsjLwbNt%2BQ9Mb0tem2vAytx9kdDOXnAFC%2BfW8EX3t0K47nrX9Umq014SDkwvzM5HMQuXQOsdZ0nF19mb1lYepF7OVfnEqY%2Bakgpmw&scm=null&pvid=null&app_pvid=59590_11.26.37.215_541_1577786810723&ptl=floorId%3A17741&originalFloorId%3A17741&app_pvid%3A59590_11.26.37.215_541_1577786810723&union_lens=lensId%3APUB%401577786746%400b58a091_0f38_16f5b6b259d_d9f8%4002jLY0RylJZ6mxpYdFcARGs',
        permanent: false
      },
      {
        source: '/r/hhkb_jd',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRtZFgsbBFAYXhUyFQRSGlkSAxEDVx1rUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgBWHFoXBRMEURldJVgRBxdmLlFncFodWgZBfk5mLhggEHIeC2UaaxUDEwdTGVkSAxM3ZRtcJUN8DlQbWxABIgZlG18TBBQOUhxbFgMRB2UcWxwyQFoLXw4WCxY3ZStYJTIiB2UYa1dsEQ9UTFtFB0EEVx0IEAIVAl0eUhYEQVNQTlMSAxECVBxrFwMTA1w%3D',
        permanent: false
      },
      {
        source: '/r/bose35_tb',
        destination:
          'https://s.click.taobao.com/t?e=m%3D2%26s%3DudfcvY9EQnocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67oYleg0aD04ywg1qdhPjl1S0bnOE5sI2FAkyzYGF1AB59vQTjUDOvGTNUi1AqCkIPApBt3MVsjLwbNt%2BQ9Mb0tem2vAytx9kdDOyg68fIckGIX7IZv33HL%2F9Umq014SDkwvzM5HMQuXQc4knwjZYwXwTSassqam1p3EqY%2Bakgpmw&scm=null&pvid=null&app_pvid=59590_11.1.235.48_49073_1564450170668&ptl=floorId:17741;app_pvid:59590_11.1.235.48_49073_1564450170668&union_lens=lensId:0b01f27f_0f6c_16c407c90d8_3967',
        permanent: false
      },
      {
        source: '/r/bose35_jd',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRprEQMXAF0eWyVGTV8LRGtMR1dGFxBFC1pXUwkEBwpZRxgHRQcLREJEAQUcTVZUGAVJHk1cTQkTSxhBekcLURpeEgoXB2V9XXVUG300Szl0SlB0XBMsU2IVYC1rVxkyEzdVGloVBBAFUhpaJTISAGVNNRUDEwZUGloXABI3VCtbEQUXAlEaWxYKEwNTK1wVCyJVCEUfQAEbA2UraxYyIjdVK1glQHwHBhpbRQcTA1UcXhQHFAAFSFlHARMOVBoLEQoTAAYSWyUAEwZREg%3D%3D',
        permanent: false
      },
      {
        source: '/r/airpods',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRprFQMTBlQfWxALEwRcKx9KWkxYZUIeUENQDEsFA1BWThgJBABAHUBZCQUdRUFGGRJDD1MdQlUQQwVKDFRXFk8jQA4SBlQaWhECFw5UGFIldVt3HlgoYUpxcQFYGXVLR3kdQltMYh4LZRprFQMTB1MZWRIDEzdlG1wlVHwHVBpaFAMTB1YdaxQyEgNSHl4RAxQEXR9YHDIVB1wrCUhcVlJWEl8lMiIEZStrFTIRNxd1XBRVEFAHGV0WAxVSUEkLEgsSAlAYXkAARgYGHAlCVRU3VxpaEQs%3D',
        permanent: false
      },
      {
        source: '/r/osmo_pocket',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRtSFwYXBlcbUxQyEgZUGloWBxoBURlYJUZNXwtEa0xHV0YXEEULWldTCQQHCllHGAdFBwtEQkQBBRxNVlQYBUkeTVxNCRNLGEF6RwtVGloUAxECXR1fFwEiRgAaI05hcUw2HEESQVlBMBwnHFBpZ1kXaxQyEgZUG10XABUGVCtrFQUiRTvPzoPUtbCMrcDMo4bQ6oKPnYwiBmUbXxMLEwNcGFMUBhAGZRxbHDJAWgtfDhYLFjdlK1glMiIHZRhrSkZPWmUZWhQGGw%3D%3D',
        permanent: false
      },
      {
        source: '/r/nokia',
        destination:
          'https://union-click.jd.com/jdc?e=&p=AyIGZRprFQMTBlUaUhYAFQNSKx9KWkxYZUIeUENQDEsFA1BWThgJBABAHUBZCQUdRUFGGRJDD1MdQlUQQwVKDFRXFk8jQA4SBlQaWxQLEQVSH1wlYmgPPFlFYQd3ZU9%2BKBYCcmVUUyZsRB4LZRprFQMTB1MZWRIDEzdlG1wlVHwHVBpaFAsSBFYTaxQyEgNcG1odAxsAVhlfEDIVB1wrCUhcVlJWEl8lMiIEZStrFTIRNxd1DhcFEwdRSV8SARBXUE4IRwsWD1IfWkYBEQ4FS1NAAxQ3VxpaEQs%3D',
        permanent: false
      },
      {
        source: '/r/datavis_book',
        destination: 'https://u.jd.com/2Cyticu',
        permanent: false
      },
      {
        source: '/r/remote2',
        destination: 'https://u.jd.com/2MyQqNj',
        permanent: false
      }
    ]
  },
  images: {
    domains: ['geekpluxblog.oss-cn-hongkong.aliyuncs.com']
  },
  ...withNextra(),
  // ...withBundleAnalyzer({}),
}
