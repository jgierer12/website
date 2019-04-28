import * as React from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "emotion";

export const font = (name, sources) => {
  let preloadFile = null;

  sources.forEach(source => {
    const sourceBaseName = `./files/dist/${name}/${source.baseName}-subset`;
    if (!source.styles) preloadFile = `${sourceBaseName}.woff2`;

    injectGlobal`
      @font-face {
        font-family: ${name};
        src: url("${require(`${sourceBaseName}.woff2`)}") format("woff2"),
             url("${require(`${sourceBaseName}.woff`)}") format("woff");
        font-display: swap;
        ${source.styles || ``}
      }
    `;
  });

  const Preload = () =>
    preloadFile && (
      <Helmet>
        <link rel="preload" href={preloadFile} as="font" type="font/woff2" />
      </Helmet>
    );

  return { Preload };
};
