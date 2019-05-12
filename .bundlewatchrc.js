module.exports = {
  files: [
    {
      path: "./public/index.html",
      maxSize: "10kb",
    },
    {
      path: "./public/app-*.js",
      maxSize: "100kb",
    },
  ],
};
