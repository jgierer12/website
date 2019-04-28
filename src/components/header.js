import * as React from "react";
import { withSlots } from "react-puggy";
import Icon from "../images/icon.svg";

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

const Brand = () => (
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
    <Icon width="50px" height="50px" />
    <span css={{ fontWeight: `500` }}>Jonas Gierer</span>
  </Link>
);

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
