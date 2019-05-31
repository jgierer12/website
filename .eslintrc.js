module.exports = require(`lodash.merge`)(
  require(`@jgierer12/js-configs/eslint/react`),
  {
    globals: {
      graphql: true,
    },
  }
);
