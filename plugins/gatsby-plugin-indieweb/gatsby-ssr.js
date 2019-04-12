const React = require(`react`);

const getKey = (scope, key) => `gatsby-plugin-indieweb_${scope}_${key}`;

const getAuthUrl = (provider, login) => {
  switch (provider) {
    case `twitter`:
      return `https://twitter.com/${login}`;
    case `github`:
      return `https://github.com/${login}`;
    case `email`:
      return `mailto:${login}`;
    default:
      throw new Error(`Invalid auth provider: ${provider}`);
  }
};

const getWebmentionUrl = (type, username) => {
  const base = `https://webmention.io/${username}`;
  switch (type) {
    case `webmention`:
      return `${base}/webmention`;
    case `pingback`:
      return `${base}/xmlrpc`;
  }
};

const defaultOptions = {
  auth: {
    twitter: false,
    github: false,
    email: false,
  },
  webmention: false,
};

module.exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  userOptions = {}
) => {
  const options = { ...defaultOptions, ...userOptions };

  let headComponents = getHeadComponents();

  if (options.auth) {
    Object.entries(options.auth).forEach(([provider, login], i) => {
      if (!login) return;

      const url = getAuthUrl(provider, login);
      headComponents.push(
        React.createElement(
          `link`,
          {
            href: url,
            rel: `me`,
            key: getKey(`auth`, i),
          },
          null
        )
      );
    });
  }

  if (options.webmention) {
    headComponents.push(
      ...[`webmention`, `pingback`].map((type, i) =>
        React.createElement(`link`, {
          href: getWebmentionUrl(type, options.webmention),
          rel: type,
          key: getKey(`webmention`, i),
        })
      )
    );
  }

  replaceHeadComponents(headComponents);
};
