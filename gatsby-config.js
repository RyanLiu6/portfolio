module.exports = {
  siteMetadata: {
    title: `Ryan Liu's Portfolio`,
    author: `@ryanliu6`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Liu's Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#E6E6FA`,
        theme_color: `#E6E6FA`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      },
    },
  ],
}
