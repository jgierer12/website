require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);

const url = [`deploy-preview`, `branch-deploy`].includes(process.env.CONTEXT)
  ? process.env.DEPLOY_PRIME_URL
  : process.env.URL;

module.exports = {
  siteMetadata: {
    url,
    title: `Jonas Gierer`,
    description: `Hi! My name is Jonas Gierer. I love creating modern and accessible websites and apps using JavaScript, React and other awesome technologies.`,
    repo: {
      url: `https://github.com/jgierer12/website`,
      contentDir: `src/content/posts`,
    },
  },
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
        icon: `src/images/icon.svg`,
        name: `Jonas Gierer`,
        short_name: `Jonas G.`,
        display: `minimal-ui`,
        theme_color: `#85927A`,
        background_color: `#FFFFFF`,
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
        defaultQuality: 95,
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
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-smartypants`],
      },
    },

    // Deploy
    `gatsby-plugin-netlify`,
  ],
};
