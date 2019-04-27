import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { withSlots } from "react-puggy";

import { Link } from "./link";

const BlogLink = () => (
  <Link
    to="/blog"
    css={{
      textTransform: `uppercase`,
      letterSpacing: `1px`,
    }}
  >
    Blog
  </Link>
);

const Brand = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link
      to="/"
      css={{
        display: `flex`,
        alignItems: `center`,
        "& > * + *": {
          marginLeft: `10px`,
        },
      }}
    >
      <Image fixed={data.file.childImageSharp.fixed} />
      <span css={{ fontWeight: `500` }}>Jonas Gierer</span>
    </Link>
  );
};

export const Header = withSlots(
  [`Left`, `Right`],
  ({ slotProps: { Left, Right }, ...props }) => (
    <header
      {...props}
      css={{
        height: `90px`,
        padding: `20px`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        "& > * + *": {
          marginLeft: `20px`,
        },
      }}
    >
      {Left ? Left.children : <Brand />}
      {Right ? Right.children : <BlogLink />}
    </header>
  )
);
