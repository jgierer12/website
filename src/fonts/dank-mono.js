import { font } from "~/fonts/font";

const name = `dank-mono`;

const { Preload } = font(name, [
  {
    baseName: `DankMono-Regular`,
  },
  {
    baseName: `DankMono-Italic`,
    styles: `font-style: italic;`,
  },
]);

export const dankMono = `${name}, monospace`;
export const DankMonoPreload = Preload;
