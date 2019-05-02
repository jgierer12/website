import * as React from "react";

import { dankMono } from "../../fonts/dank-mono";
import * as colors from "../../colors";

export const CodeInline = props => ({ tokens, getTokenProps }) => {
  const line = tokens[0];
  return (
    <code
      {...props}
      css={{
        fontFamily: dankMono,
        background: colors.mono.light,
        color: colors.mono.black,
        borderRadius: `4px`,
        padding: `2px 6px`,
      }}
    >
      {line.map((token, i) => (
        <span {...getTokenProps({ token, key: i })} />
      ))}
    </code>
  );
};
