import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/layout";
import { BlogLayout } from "../components/blog-layout";
import { baseCss } from "../components/typography";
import { spaceMono } from "../fonts/space-mono";
import { PTSerifPreload } from "../fonts/pt-serif";
import { PostHeader } from "../components/post-header";

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        published
        image {
          source {
            childImageSharp {
              fluid(
                maxWidth: 1920
                maxHeight: 600
                quality: 95
                grayscale: true
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      excerpt
      code {
        body
      }
    }
  }
`;

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <Layout.SEO description={mdx.excerpt} />
      <PTSerifPreload />
      <BlogLayout>
        <PostHeader mdx={mdx} />
        <article
          css={{
            ...baseCss,
            gridColumn: `2`,
            gridRow: `4`,
            padding: `20px`,
          }}
        >
          <MDXProvider
            components={{
              inlineCode: props => (
                <code {...props} css={{ fontFamily: spaceMono }} />
              ),
            }}
          >
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </BlogLayout>
    </Layout>
  );
};
