const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw new Error(result.errors);
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: { id: node.id },
    });
  });
};
