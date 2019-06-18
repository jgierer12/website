const path = require(`path`);
const fs = require(`fs`);
const rimraf = require(`rimraf`);
const mkdirp = require(`mkdirp`);
const Whitelist = require(`glyphhanger/src/GlyphHangerWhitelist`);
const Subset = require(`glyphhanger/src/GlyphHangerSubset`);

const whitelist = new Whitelist(null, { LATIN: true });

const fontDir = path.join(__dirname, `../src/fonts/files`);
const fonts = fs.readdirSync(path.join(fontDir, `src`));

rimraf.sync(path.join(fontDir, `dist`));

fonts.forEach(font => {
  mkdirp.sync(path.join(fontDir, `dist`, font));

  const fontFiles = fs
    .readdirSync(path.join(fontDir, `src`, font))
    .filter(file => /\.[ot]tf$/.test(file));

  fontFiles.forEach(fontFile => {
    const subset = new Subset();
    subset.setOutputDirectory(path.join(fontDir, `dist`, font));
    subset.setFormats(`woff, woff2`);
    subset.setFontFilesGlob(path.join(fontDir, `src`, font, fontFile));

    try {
      subset.subsetAll(whitelist.getWhitelistAsUnicodes());
    } catch (e) {
      console.error(`error while subsetting ${fontFile}: `, e);
    }
  });
});
