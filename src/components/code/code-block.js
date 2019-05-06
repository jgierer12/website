import * as React from "react";

import { dankMono } from "~/fonts/dank-mono";
import { inter } from "~/fonts/inter";
import * as colors from "~/colors";
import * as media from "~/media";

export const CodeBlock = ({ filename, language }) => ({
  tokens,
  getLineProps,
  getTokenProps,
}) => (
  <pre
    css={{
      fontFamily: dankMono,
      margin: `0 -20px`,
      marginTop: `10px`,
      overflow: `hidden`,
      lineHeight: `1.5`,
      "& ::selection": {
        background: colors.mono.light,
        color: colors.mono.text,
      },
      [media.mobile.above]: {
        borderRadius: `4px`,
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
            fontVariantCaps: `all-small-caps`,
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
