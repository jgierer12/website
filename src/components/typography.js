import * as React from "react";

import * as colors from "../colors";
import { inter } from "../fonts/inter";
import { ptSerif } from "../fonts/pt-serif";

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
      }}
    />
  );
};
