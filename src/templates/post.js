import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "~/components/layout";
import { PostFull } from "~/components/post-full";

export const query = graphql`
  query($id: String) {
    post: mdx(id: { eq: $id }) {
      ...PostFull
      excerpt
      frontmatter {
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
  <Layout>
    <Layout.SEO
      description={post.excerpt}
      image={post.frontmatter.image.source.childImageSharp.fixed.src}
    />
    <PostFull post={post} />
  </Layout>
);
