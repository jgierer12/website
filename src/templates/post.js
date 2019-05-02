import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "~/components/layout";
import { BlogLayout } from "~/components/blog-layout";
import * as Typography from "~/components/typography";
import { Code } from "~/components/code";
import { PTSerifPreload } from "~/fonts/pt-serif";
import { PostHeader } from "~/components/post-header";

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        published
        author
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
  return (
    <Code
      {...props}
      language={language}
      is="block"
      css={{ margin: `20px -20px` }}
    />
  );
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
            ...Typography.baseCss,
            gridColumn: `2`,
            gridRow: `4`,
            padding: `20px`,
          }}
        >
          <MDXProvider
            components={{
              a: Typography.Link,
              inlineCode: Code,
              pre: MdxCode,
              blockquote: Typography.Quote,
              h1: props => <Typography.Heading level={1} {...props} />,
              h2: props => <Typography.Heading level={2} {...props} />,
              h3: props => <Typography.Heading level={3} {...props} />,
            }}
          >
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </BlogLayout>
    </Layout>
  );
};
