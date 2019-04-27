import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import "typeface-space-mono";
import "typeface-pt-serif";

import { Layout } from "../components/layout";

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
      <article
        css={{
          fontFamily: `PT Serif, serif`,
          maxWidth: `720px`,
          margin: `auto`,
        }}
      >
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider
          components={{
            inlineCode: props => (
              <code {...props} css={{ fontFamily: `Space Mono, monospace` }} />
            ),
          }}
        >
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};
