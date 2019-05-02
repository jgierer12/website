import { font } from "~/fonts/font";

const name = `pt-serif`;

const { Preload } = font(name, [
  {
    baseName: `PTSerif-Regular`,
  },
  {
    baseName: `PTSerif-Italic`,
    styles: `font-style: italic;`,
  },
  {
    baseName: `PTSerif-Bold`,
    styles: `font-weight: 700;`,
  },
  {
    baseName: `PTSerif-BoldItalic`,
    styles: `font-weight: 700; font-style: italic;`,
  },
]);

export const ptSerif = `${name}, serif`;
export const PTSerifPreload = Preload;
