import * as React from "react";

import { Link } from "~/components/link";
import * as colors from "~/colors";
import { transition } from "~/transition";

export const Nav = props => (
  <ul
    {...props}
    css={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      paddingRight: `20px`,
    }}
  />
);

const NavItem = props => (
  <li>
    <Link
      {...props}
      css={{
        color: colors.greens.medium,
        ...transition(`color`),
        ...transition.out,
        display: `block`,
        lineHeight: `1`,
        "&:hover": {
          ...transition.in,
          color: colors.greens.dark,
        },
      }}
    />
  </li>
);

export const NavItemIcon = ({ icon: Icon, label, ...props }) => (
  <NavItem {...props} aria-label={label} css={{ lineHeight: `0` }}>
    <Icon role="img" fill="currentColor" width="2em" height="2em" />
  </NavItem>
);

export const NavItemText = props => (
  <NavItem
    {...props}
    css={{
      fontWeight: `700`,
      letterSpacing: `2px`,
      textTransform: `uppercase`,
    }}
  />
);
