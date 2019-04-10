module.exports = require(`deepmerge`)(
  {
    globals: {
      graphql: true,
    },
  },
  require(`@jgierer12/js-configs/eslint`),
  require(`@jgierer12/js-configs/eslint/react`)
);
