/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Reggie Galang's portfolio`,
    siteUrl: `https://reguv760.github.io/`,
    siteUpdateDate: `5.24.21`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/about"],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/icons/rg-logo.png", // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-6371690-26",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
}
