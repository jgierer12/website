import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/layout";
import { BlogLayout } from "../components/blog-layout";
import * as typography from "../components/typography";
import { Code } from "../components/code";
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

const MdxCode = ({
  children: {
    props: { className, ...props },
  },
}) => {
  const language = className && className.split(`-`)[1];
  return <Code {...props} language={language} is="block" />;
};

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <Layout.SEO description={mdx.excerpt} />
      <PTSerifPreload />
      <BlogLayout>
        <PostHeader mdx={mdx} />
        <article
          css={{
            ...typography.baseCss,
            gridColumn: `2`,
            gridRow: `4`,
            padding: `20px`,
          }}
        >
          <MDXProvider
            components={{
              a: typography.Link,
              inlineCode: Code,
              pre: MdxCode,
            }}
          >
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </BlogLayout>
    </Layout>
  );
};
