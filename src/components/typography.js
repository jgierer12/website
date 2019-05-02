import * as React from "react";

import * as colors from "~/colors";
import { inter } from "~/fonts/inter";
import { ptSerif } from "~/fonts/pt-serif";
import { Link as DefaultLink } from "~/components/link";
import { transition } from "~/transition";

export const baseCss = {
  fontFamily: ptSerif,
  wordWrap: `break-word`,
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
        marginTop: `40px`,
      }}
    />
  );
};

export const Link = props => (
  <DefaultLink
    {...props}
    css={{
      background: colors.mono.light,
      padding: `2px 6px`,
      borderRadius: `4px`,
      fontFamily: inter,
      ...transition(`background, color`),
      ...transition.out,
      "&:hover": {
        ...transition.in,
        background: `#CFDCC4`,
        color: colors.mono.black,
      },
    }}
  />
);

export const Quote = props => (
  <blockquote
    {...props}
    css={{
      color: colors.mono.dark,
      // marginLeft: `-20px`,
      paddingLeft: `15px`,
      borderLeft: `5px solid ${colors.greens.light}`,
      fontStyle: `italic`,
    }}
  />
);
