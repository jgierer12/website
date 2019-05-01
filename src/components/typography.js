import * as React from "react";

import * as colors from "../colors";
import { inter } from "../fonts/inter";
import { ptSerif } from "../fonts/pt-serif";
import { Link as DefaultLink } from "./link";
import { transition } from "../transition";

export const baseCss = {
  fontFamily: ptSerif,
  wordWrap: `break-word`,
  hyphens: `auto`,
  "& > * + *": {
    marginTop: `10px`,
  },
};

export const Heading = ({ level, ...props }) => {
  const H = React.useMemo(
    () => ({ children, ...hProps }) =>
      React.createElement(`h${level}`, hProps, children),
    [level]
  );

  // prettier-ignore
  const fontSize = React.useMemo(
    () => [`250%`, `200%`, `150%`][level - 1],
    [level]
  );

  return (
    <H
      {...props}
      css={{
        fontFamily: inter,
        fontSize,
        lineHeight: `1.2`,
        fontWeight: `500`,
        marginTop: `20px`,
      }}
    />
  );
};

export const Link = props => (
  <DefaultLink
    {...props}
    css={{
      color: colors.greens.medium,
      textDecoration: `underline transparent`,
      ...transition(`text-decoration-color`),
      ...transition.out,
      "&:hover": {
        ...transition.in,
        textDecorationColor: colors.greens.medium,
      },
    }}
  />
);

export const Quote = props => (
  <blockquote
    {...props}
    css={{
      color: colors.mono.dark,
      marginLeft: `-20px`,
      paddingLeft: `15px`,
      borderLeft: `5px solid ${colors.greens.light}`,
      fontStyle: `italic`,
    }}
  />
);
