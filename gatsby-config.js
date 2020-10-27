/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A website on the internet`,
    pineapple: 'woot!',
    author: `Gabriela Cabrera`,
    description: `Software Dev.`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gnotes`,
        path: `${__dirname}/src/data/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
