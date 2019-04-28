import { injectGlobal } from "emotion";

export const font = (name, sources) => {
  sources.forEach(source => {
    const sourceBaseName = `./files/dist/${name}/${source.baseName}-subset`;
    injectGlobal`
      @font-face {
        font-family: ${name};
        src: url("${require(`${sourceBaseName}.woff2`)}") format("woff2"),
             url("${require(`${sourceBaseName}.woff`)}") format("woff");
        ${source.styles || ``}
      }
    `;
  });
};
