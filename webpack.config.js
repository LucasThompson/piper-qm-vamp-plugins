const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'qm.umd.js',
    library: "QM",
    libraryTarget: "umd"
  },
  module: {
    noParse: /QMVampPlugins.asm.umd.js/
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        worker: {
          output: {
            filename: "qm.worker.js",
            chunkFilename: "[id].qm.worker.js"
          }
        }
      }
    }),
    new UglifyJSPlugin(
      {
        sourceMap: false,
        uglifyOptions: { mangle: false }, // seems there is a bug otherwise,
        exclude: /qm.asm.umd/
      }
    )
  ]
};
