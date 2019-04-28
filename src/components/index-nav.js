import * as React from "react";
import { Link } from "./link";

import * as colors from "../colors";
import { transition } from "../transition";

export const Nav = props => (
  <ul
    {...props}
    css={{
      display: `flex`,
      alignItems: `center`,
      "& > * + *": {
        marginLeft: `40px`,
      },
    }}
  />
);

const NavItem = props => (
  <li>
    <Link
      {...props}
      css={{
        color: colors.greens.light,
        ...transition(`color`),
        ...transition.out,
        display: `block`,
        height: `50px`,
        "&:hover": {
          ...transition.in,
          color: colors.greens.dark,
        },
      }}
    />
  </li>
);

export const NavItemIcon = ({ icon: Icon, label, ...props }) => (
  <NavItem {...props} aria-label={label}>
    <Icon role="img" fill="currentColor" width="50px" height="50px" />
  </NavItem>
);

export const NavItemText = props => (
  <NavItem
    {...props}
    css={{
      paddingTop: `6px`,
      fontWeight: `600`,
      letterSpacing: `2px`,
      textTransform: `uppercase`,
    }}
  />
);
