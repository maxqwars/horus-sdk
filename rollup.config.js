const outDir = "dist";

export default {
  input: "./src/index.js",
  plugins: {},
  output: [
    {
      file: `${outDir}/index.js`,
      format: "cjs",
    },
    {
      file: `${outDir}/index.mjs`,
      format: "esm",
    },
    {
      name: "horus-sdk",
      file: `${outDir}/index.umd.js`,
      format: "umd",
    },
  ],
};
