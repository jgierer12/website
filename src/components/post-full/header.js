import * as React from "react";
import { format as formatDate } from "date-fns";
import { graphql } from "gatsby";

import * as colors from "~/colors";
import { TintedImage } from "~/components/tinted-image";
import { Heading } from "~/components/typography";
import * as media from "~/media";

export const query = graphql`
  fragment PostFull_Header on Mdx {
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
  }
`;

export const PostHeader = ({ mdx }) => (
  <>
    <TintedImage
      fluid={mdx.frontmatter.image.source.childImageSharp.fluid}
      css={{
        gridColumn: `1 / 4`,
        gridRow: `2`,
        zIndex: `-10`,
        "*::selection": {
          background: `none`,
        },
        [media.mobile.above]: {
          gridRowEnd: `4`,
        },
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
        textAlign: `center`,
        [media.mobile.above]: {
          borderTopLeftRadius: `2px`,
          borderTopRightRadius: `2px`,
          background: colors.mono.white,
        },
        [media.mobile.below]: {
          paddingBottom: `0px`,
        },
      }}
    >
      <Heading level={1} css={{ margin: `0px` }}>
        {mdx.frontmatter.title}
      </Heading>
      <div
        css={{
          color: colors.mono.medium,
          marginTop: `10px`,
          em: {
            fontStyle: `normal`,
            color: colors.mono.text,
          },
        }}
      >
        Published on{` `}
        <em>
          <time dateTime={mdx.frontmatter.published}>
            {formatDate(mdx.frontmatter.published, `MMMM D, YYYY`)}
          </time>
        </em>
        {` `}
        by{` `}
        <em>{mdx.frontmatter.author || `Jonas Gierer`}</em>
      </div>
    </div>
  </>
);