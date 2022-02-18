module.exports = {
  siteMetadata: {
    title: `Francisco Gonçalves`,
    description: ``,
    author: `Francisco Goncalves`,
    siteUrl: `https://kikogoncalves.me/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francisco Goncalves website`,
        short_name: `kikogoncalves`,
        description: `Francisco Goncalves, 22 year old Software Engineer.`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon-rounded.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
