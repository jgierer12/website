import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/layout";
import { BlogLayout } from "../components/blog-layout";
import { baseCss, Heading } from "../components/typography";

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
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
      <BlogLayout>
        <article css={{ ...baseCss, padding: `0 20px` }}>
          <Heading level={1}>{mdx.frontmatter.title}</Heading>
          <MDXProvider
            components={{
              inlineCode: props => (
                <code
                  {...props}
                  css={{ fontFamily: `Space Mono, monospace` }}
                />
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
