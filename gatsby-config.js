const path = require(`path`);

module.exports = {
  plugins: [
    // Convenience
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-indieweb`,
      options: {
        auth: {
          twitter: `jgierer12`,
          github: `jgierer12`,
        },
        webmention: `jonasgierer.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/icon.png`,
      },
    },

    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `Jonas Gierer`,
        short_name: `Jonas G.`,
        display: `minimal-ui`,
        theme_color: `#85927A`,
        background_color: `#FFFFFF`,
        defaultQuality: 80,
      },
    },

    // Content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `src`, `content`, `posts`),
      },
    },
    {
      resolve: `gatsby-mdx`,
    },

    // Deploy
    `gatsby-plugin-netlify`,
  ],
};
