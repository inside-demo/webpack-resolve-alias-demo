const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');
const webpackConfig = require('./webpack.config.js');

const plugins = [
  cssImport({
    resolve: createResolver({
      alias: webpackConfig.resolve.alias
    })
  })
]

module.exports = {
  plugins
};