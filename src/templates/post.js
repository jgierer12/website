import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "~/components/layout";
import { PostFull } from "~/components/post-full";
import { PostContext } from "~/contexts/post";

export const query = graphql`
  query($id: String) {
    post: mdx(id: { eq: $id }) {
      ...PostFull
      excerpt
      frontmatter {
        title
        image {
          source {
            childImageSharp {
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data: { post } }) => (
  <PostContext.Provider value={post}>
    <Layout>
      <Layout.SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image.source.childImageSharp.fixed.src}
      />
      <PostFull />
    </Layout>
  </PostContext.Provider>
);
