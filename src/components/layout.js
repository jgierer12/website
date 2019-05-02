import * as React from "react";
import { Global } from "@emotion/core";
import { withSlots } from "react-puggy";
import "destyle.css";
import "focus-visible";

import * as colors from "~/colors";
import { SEO } from "~/components/seo";
import { SearchContextProvider } from "~/components/search-context";
import { inter, InterPreload } from "~/fonts/inter";

export const Layout = withSlots(
  [`SEO`],
  ({ slotProps: { SEO: seoProps = {} }, children }) => {
    return (
      <>
        <SEO {...seoProps} />
        <InterPreload />
        <Global
          styles={{
            html: {
              "&, body, #___gatsby, #___gatsby > div": {
                height: `100%`,
                width: `100%`,
              },
              font: `120%/1.65 ${inter}`,
              color: colors.mono.text,
              "& ::selection": {
                background: colors.mono.text,
                color: colors.mono.white,
              },
              "@media screen and (max-width: 900px)": {
                fontSize: `18px`,
              },
            },
            "body > noscript": {
              background: colors.mono.light,
              display: `block`,
              textAlign: `center`,
              padding: `5px`,
            },
            ".js-focus-visible :focus:not(.focus-visible)": {
              outline: `none`,
            },
          }}
        />
        <SearchContextProvider>{children}</SearchContextProvider>
      </>
    );
  }
);
