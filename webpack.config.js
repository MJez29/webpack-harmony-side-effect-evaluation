const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  mode: "production",
  output: {
    filename: "build.js",
  },
  externals: [nodeExternals()],
  stats: {
    logging: "verbose",
    all: true,
    modulesSpace: 100,
  },
};
