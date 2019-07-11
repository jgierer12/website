import * as React from "react";
import { graphql } from "gatsby";

import { BlogLayout } from "~/components/blog-layout";
import { PostFull } from "~/components/post-full";
import { PostContext } from "~/contexts/post";
import { PageProvider } from "~/contexts/page";

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
  <PageProvider
    title={post.frontmatter.title}
    description={post.excerpt}
    image={post.frontmatter.image.source.childImageSharp.fixed.src}
    type="article"
  >
    <PostContext.Provider value={post}>
      <BlogLayout>
        <PostFull />
      </BlogLayout>
    </PostContext.Provider>
  </PageProvider>
);
