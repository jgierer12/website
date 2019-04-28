import { font } from "./font";

const name = `space-mono`;

const { Preload } = font(name, [
  {
    baseName: `SpaceMono-Regular`,
  },
  {
    baseName: `SpaceMono-Italic`,
    styles: `font-style: italic;`,
  },
  {
    baseName: `SpaceMono-Bold`,
    styles: `font-weight: 700;`,
  },
  {
    baseName: `SpaceMono-BoldItalic`,
    styles: `font-weight: 700; font-style: italic;`,
  },
]);

export const spaceMono = `${name}, monospace`;
export const SpaceMonoPreload = Preload;
