/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `personal`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
        resolve: '@chakra-ui/gatsby-plugin',
        options: {
            resetCss: true,
            isUsingColorMode: true,
        },
    },
  ],
}
