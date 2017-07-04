const path = require('path');
const webpack = require('webpack');

const config = require('../src/config');
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, '/src/');
const distPath = path.join(rootPath, '/build/');

const webpackConfig = {
  devtool: false,
  entry: {
    main: ['babel-polyfill', srcPath + 'electron']
  },
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, include: srcPath, loaders: ['babel']}
    ],
  },
  externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]
}

module.exports = webpackConfig;
