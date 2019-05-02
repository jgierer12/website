import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import * as colors from "../colors";
import { dankMono } from "../fonts/dank-mono";
import { inter } from "../fonts/inter";

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

const InlineCodeContent = props => ({ tokens, getTokenProps }) => {
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

const BlockCodeContent = ({ filename, language, ...props }) => ({
  tokens,
  getLineProps,
  getTokenProps,
}) => (
  <pre
    {...props}
    css={{
      fontFamily: dankMono,
      borderRadius: `4px`,
      margin: `0 -20px`,
      marginTop: `10px`,
      overflow: `hidden`,
      lineHeight: `1.5`,
      "& ::selection": {
        background: colors.mono.light,
        color: colors.mono.text,
      },
    }}
  >
    {(filename || language) && (
      <div
        css={{
          padding: `10px 20px`,
          background: colors.mono.text,
          color: colors.mono.white,
        }}
      >
        <span
          css={{
            marginRight: `10px`,
            fontFamily: inter,
            textTransform: `uppercase`,
            fontSize: `75%`,
            fontWeight: `500`,
            color: colors.languages[language] || colors.mono.white,
          }}
        >
          {language}
        </span>
        <span>{filename}</span>
      </div>
    )}
    <code
      css={{
        fontFamily: dankMono,
        display: `block`,
        padding: `20px`,
        overflow: `auto`,
        background: colors.mono.black,
        color: colors.mono.light,
      }}
    >
      {tokens.map((line, i) => (
        <div {...getLineProps({ line, key: i })}>
          {line.map((token, j) => (
            <span {...getTokenProps({ token, key: j })} />
          ))}
        </div>
      ))}
    </code>
  </pre>
);

export const Code = ({ children, is, language, ...props }) => (
  <Highlight
    {...defaultProps}
    language={language}
    code={children.trim()}
    theme={{ styles: theme }}
  >
    {(is === `block` ? BlockCodeContent : InlineCodeContent)({
      language,
      ...props,
    })}
  </Highlight>
);
