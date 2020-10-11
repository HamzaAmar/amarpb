const config = require("./src/constants/meta")

module.exports = {
  siteMetadata: {
    title: config.siteTitleAlt,
    description: config.siteDescription,
    canonicalUrl: config.siteUrl,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    image: config.siteLogo,
    social: {
      twitter: config.userTwitter,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: "",
    },
    keywords: ["Software Engineer", "React js", "Web Developer"],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/data/blogs`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/components/Layout`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hamza Miloud Amar`,
        short_name: `HMA`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/me-192X192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/me-512X512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
