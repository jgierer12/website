import * as React from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "emotion";

export const font = (name, sources) => {
  let preloadFile = null;

  sources.forEach(source => {
    const sourceBaseName = `./files/dist/${name}/${source.baseName}-subset`;
    const woff2 = require(`${sourceBaseName}.woff2`);
    const woff = require(`${sourceBaseName}.woff`);

    if (!source.styles) preloadFile = woff2;

    injectGlobal`
      @font-face {
        font-family: ${name};
        src: url("${woff2}") format("woff2"),
             url("${woff}") format("woff");
        font-display: swap;
        ${source.styles || ``}
      }
    `;
  });

  const Preload = () =>
    preloadFile && (
      <Helmet>
        <link
          rel="preload"
          href={preloadFile}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
    );

  return { Preload };
};
