import * as React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/core";
import "destyle.css";
import "typeface-inter";

import * as colors from "../colors";

export const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Jonas Gierer</title>
        <meta
          name="description"
          content="Hi! My name is Jonas Gierer. I love creating modern and accessible websites and apps using JavaScript, React and other awesome technologies."
        />
      </Helmet>
      <Global
        styles={{
          html: {
            "&, body, #___gatsby, #___gatsby > div": {
              height: `100%`,
              width: `100%`,
            },
            fontSize: `28px`,
            lineHeight: `1.3`,
            fontFamily: `Inter`,
            color: colors.black,
            "& ::selection": {
              background: colors.black,
              color: colors.white,
            },
            "@media screen and (max-width: 900px)": {
              fontSize: `22px`,
            },
          },
        }}
      />
      {children}
    </>
  );
};
