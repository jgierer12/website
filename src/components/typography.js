import * as React from "react";
import "typeface-space-mono";
import "typeface-pt-serif";
import "typeface-inter";

import * as colors from "../colors";

export const baseCss = {
  fontFamily: `PT Serif, serif`,
};

export const Heading = ({ level, ...props }) => {
  const H = React.useMemo(
    () => ({ children, ...hProps }) =>
      React.createElement(`h${level}`, hProps, children),
    [level]
  );

  // prettier-ignore
  const fontSize = React.useMemo(
    () => [`300%`, `200%`, `150%`][level - 1],
    [level]
  );

  return (
    <H
      {...props}
      css={{
        fontFamily: `Inter`,
        fontSize,
        fontWeight: `500`,
        color: colors.greens.dark,
      }}
    />
  );
};
