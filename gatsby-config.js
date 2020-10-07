module.exports = {
  siteMetadata: {
    title: `amarpb`,
    description: `this is my little portfolio and blog describe myself and do some 
                  good articles about javascript react next and gatsby`,
    url: "https://www.hamzaamar.io",
    author: `Hamza Miloud Amar`,
    social: {
      twitter: "@dan_abramov",
    },
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
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
