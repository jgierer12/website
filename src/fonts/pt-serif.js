import { font } from "~/fonts/font";

const name = `pt-serif`;

const { Preload } = font(name, [
  {
    baseName: `PTF55F`,
  },
  {
    baseName: `PTF56F`,
    styles: `font-style: italic;`,
  },
  {
    baseName: `PTF75F`,
    styles: `font-weight: 700;`,
  },
  {
    baseName: `PTF76F`,
    styles: `font-weight: 700; font-style: italic;`,
  },
]);

export const ptSerif = `${name}, serif`;
export const PTSerifPreload = Preload;
