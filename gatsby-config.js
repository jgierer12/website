const path = require(`path`);

module.exports = {
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/icon.png`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
