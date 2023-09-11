import webpack from "webpack";

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  //...
};
