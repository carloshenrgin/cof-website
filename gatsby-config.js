/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Contra o Filé",
    titleTemplate: "%s · Restaurante Vegano",
    description:
      "Um restaurante vegano com a proposta de ser saudável e com custo acessível",
    url: "", // No trailing slash allowed!
    image: "", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-modal-routing-3`,
    `gatsby-plugin-react-helmet`,
  ],
  pathPrefix: `/cof-website`,
}
