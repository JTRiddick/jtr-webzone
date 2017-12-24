const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `JTRiddick Portfolio Page`,
    author: `Jordan Taylor Riddick`,
    description: "JT Riddick front end react web developer"
  },
  // pathPrefix: '\\',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}\\src\\posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}\\src\\images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],


}
