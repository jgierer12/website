import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/layout";
import { BlogLayout } from "../components/blog-layout";
import { baseCss, Heading } from "../components/typography";
import { spaceMono } from "../fonts/space-mono";
import { PTSerifPreload } from "../fonts/pt-serif";
import { TintedImage } from "../components/tinted-image";
import * as colors from "../colors";

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
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
        <TintedImage
          fluid={mdx.frontmatter.image.source.childImageSharp.fluid}
          critical
          css={{
            gridColumn: `1 / 4`,
            gridRow: `2 / 4`,
            zIndex: `-10`,
          }}
          tintCss={{
            mixBlendMode: `overlay`,
            background: `
            linear-gradient(160deg,
              ${colors.greens.primary}33 25%,
              ${colors.greens.primary} 100%
            )
          `,
          }}
        />
        <div
          css={{
            gridColumn: `2`,
            gridRow: `3`,
            padding: `20px`,
            background: colors.mono.white,
            textAlign: `center`,
          }}
        >
          <Heading level={1}>{mdx.frontmatter.title}</Heading>
        </div>
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
