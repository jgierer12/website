import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import * as colors from "../../colors";
import { CodeBlock } from "./code-block";
import { CodeInline } from "./code-inline";

export const theme = [
  {
    types: [`function`, `variable`],
    style: {
      color: colors.greens.primary,
    },
  },
  {
    types: [`keyword`, `attr-name`],
    style: {
      color: colors.greens.dark,
      fontStyle: `italic`,
    },
  },
  {
    types: [`deleted`, `punctuation`, `symbol`, `operator`],
    style: {
      color: colors.greens.dark,
    },
  },
  {
    types: [
      `string`,
      `char`,
      `tag`,
      `selector`,
      `prolog`,
      `constant`,
      `builtin`,
      `inserted`,
    ],
    style: {
      color: colors.greens.light,
    },
  },
  {
    types: [`comment`, `changed`],
    style: {
      color: colors.mono.dark,
      fontStyle: `italic`,
    },
  },
];

export const Code = ({ children, is, language, ...props }) => (
  <Highlight
    {...defaultProps}
    language={language}
    code={children.trim()}
    theme={{ styles: theme }}
  >
    {(is === `block` ? CodeBlock : CodeInline)({
      language,
      ...props,
    })}
  </Highlight>
);
