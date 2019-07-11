import { font } from "~/fonts/font";

const name = `inter`;

const { Preload } = font(name, [
  {
    baseName: `Inter-Regular`,
  },
  {
    baseName: `Inter-Italic`,
    styles: `font-style: italic;`,
  },
  {
    baseName: `Inter-Medium`,
    styles: `font-weight: 500;`,
  },
  {
    baseName: `Inter-MediumItalic`,
    styles: `font-weight: 500; font-style: italic;`,
  },
  {
    baseName: `Inter-Bold`,
    styles: `font-weight: 700;`,
  },
  {
    baseName: `Inter-BoldItalic`,
    styles: `font-weight: 700; font-style: italic;`,
  },
]);

export const inter = `${name}, sans-serif`;
export const InterPreload = Preload;
