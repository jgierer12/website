import * as React from "react";
import { withSlots } from "react-puggy";

import Icon from "~/images/icon.svg";
import { Link } from "~/components/link";
import * as colors from "~/colors";
import { transition } from "~/transition";
import * as media from "~/media";

export const HeaderLink = ({ as: Component = Link, ...props }) => (
  <Component
    {...props}
    css={{
      ...transition(`color`),
      ...transition.out,
      color: colors.mono.medium,
      "&:hover": {
        ...transition.in,
        color: colors.mono.text,
      },
    }}
  />
);

const BlogLink = () => (
  <HeaderLink
    to="/blog"
    css={{
      textTransform: `uppercase`,
      letterSpacing: `1px`,
    }}
  >
    Blog
  </HeaderLink>
);

const Brand = () => (
  <HeaderLink
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
  </HeaderLink>
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
        [media.mobile.below]: {
          height: `70px`,
          padding: `20px 10px`,
        },
      }}
    >
      {Left ? Left.children : <Brand />}
      {Right ? Right.children : <BlogLink />}
    </header>
  )
);
