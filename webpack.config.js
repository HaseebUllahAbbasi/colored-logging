const path = require("path");

module.exports = {
  entry: "./src/Logger.js",
  output: {
    filename: "Logger.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "Logger",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
