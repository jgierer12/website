import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "./link";
// import { format as formatDate } from "date-fns";

import { TintedImage } from "./tinted-image";
import * as colors from "../colors";

export const postCardFragment = graphql`
  fragment PostCard on Mdx {
    frontmatter {
      title
      published
      image {
        source {
          childImageSharp {
            fluid(maxWidth: 800, quality: 95, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        position
      }
      excerpt
    }
    fields {
      slug
    }
  }
`;

export const PostCard = ({ data }) => {
  return (
    <Link
      to={data.fields.slug}
      className="post-card"
      css={{
        display: `block`,
      }}
    >
      <TintedImage
        fluid={data.frontmatter.image.source.childImageSharp.fluid}
        css={{
          borderTopLeftRadius: `4px`,
          borderTopRightRadius: `4px`,
          height: `250px`,
          "& img": {
            objectPosition:
              data.frontmatter.image.position &&
              `${data.frontmatter.image.position} !important`,
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
          transition: `opacity 0.2s ease-in-out`,
          ".post-card:hover &": {
            opacity: 0.75,
          },
        }}
      />
      <div
        css={{
          padding: `20px`,
          border: `1px solid ${colors.mono.light}`,
          borderTop: `none`,
          borderBottomLeftRadius: `4px`,
          borderBottomRightRadius: `4px`,
        }}
      >
        <h2
          css={{
            fontSize: `175%`,
            fontWeight: `500`,
            color: colors.greens.light,
            transition: `color 0.2s ease-in-out`,
            ".post-card:hover &": {
              color: colors.greens.dark,
            },
          }}
        >
          {data.frontmatter.title}
        </h2>
        {/* <div>
          <time dateTime={data.frontmatter.published}>
            {formatDate(data.frontmatter.published, `MMMM D, YYYY`)}
          </time>
        </div> */}
        <p>{data.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
};
