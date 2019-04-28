import * as React from "react";
import { Global } from "@emotion/core";
import { withSlots } from "react-puggy";
import "destyle.css";
import "typeface-inter";

import * as colors from "../colors";
import { SEO } from "./seo";
import { SearchContextProvider } from "./search-context";

export const Layout = withSlots(
  [`SEO`],
  ({ slotProps: { SEO: seoProps = {} }, children }) => {
    return (
      <>
        <SEO {...seoProps} />
        <Global
          styles={{
            html: {
              "&, body, #___gatsby, #___gatsby > div": {
                height: `100%`,
                width: `100%`,
              },
              font: `120%/1.5 Inter, sans-serif`,
              color: colors.mono.black,
              "& ::selection": {
                background: colors.mono.black,
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
          }}
        />
        <SearchContextProvider>{children}</SearchContextProvider>
      </>
    );
  }
);
