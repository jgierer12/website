import * as React from "react";

import * as colors from "../colors";
import { inter } from "../fonts/inter";
import { ptSerif } from "../fonts/pt-serif";

export const baseCss = {
  fontFamily: ptSerif,
};

export const Heading = ({ level, ...props }) => {
  const H = React.useMemo(
    () => ({ children, ...hProps }) =>
      React.createElement(`h${level}`, hProps, children),
    [level]
  );

  // prettier-ignore
  const fontSize = React.useMemo(
    () => [`200%`, `150%`, `125%`][level - 1],
    [level]
  );

  return (
    <H
      {...props}
      css={{
        fontFamily: inter,
        fontSize,
        fontWeight: `500`,
      }}
    />
  );
};
