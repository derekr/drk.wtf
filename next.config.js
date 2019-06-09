const withPlugins = require('next-compose-plugins')

const withCSS = require('@zeit/next-css')
const withFonts = require('./lib/next-fonts')
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [],
    hastPlugins: [],
  },
})

module.exports = withPlugins(
  [
    [withFonts],
    [withCSS],
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'mdx'],
        exportPathMap(defaultExportMap) {
          return {
            ...defaultExportMap,
          }
        },
      },
    ],
  ],
  {
    target: 'serverless',
  }
)
