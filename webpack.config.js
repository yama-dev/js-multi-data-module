const webpack = require('webpack');

const env = process.env.NODE_ENV;

const config = {
  mode: env || 'development',
  entry: {
    'js-multi-data-module': './src/js-multi-data-module.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = config;
