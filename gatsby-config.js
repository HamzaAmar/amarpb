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
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                canonicalUrl
                site_url: canonicalUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                const { fields, frontmatter } = edge.node
                const url =
                  site.siteMetadata.canonicalUrl + "/blog" + fields.slug
                return {
                  ...frontmatter,
                  url,
                  guid: url,
                  custom_elements: [
                    {
                      "content:encoded": `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                          <p>
                            I've posted a new article <em>"${frontmatter.title}"</em> and you can <a href="${url}">read it online</a>.
                            <br>
                            ${fields.plainTextDescription}
                            <br>
                            You can also <a href="${url}/subscribe">subscribe</a> for weekly emails on what I'm learning, working on, and writing about.
                          </p>
                        </div>`,
                    },
                  ],
                }
              })
            },
            query: `
            {

              allMdx(
               sort: { order: DESC, fields: [frontmatter___date] },
               filter: {fileAbsolutePath: {regex: "//data/blogs//"}}
               ) {
                edges {
                                node {
                                  fields {
                                    slug
                                  }
                                  frontmatter {
                                    title
                                    description
                                    date
                                  }
                                }
                  }
                }
            }
            `,
            output: "/blogs/rss.xml",
            title: "Hamza Miloud Amar RSS Feed",
          },
        ],
      },
    },
  ],
}
