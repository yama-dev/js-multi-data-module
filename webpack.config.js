const pkg = require('./package.json');

const comment = `@${pkg.author}/${pkg.name} version:${pkg.version} repository:${pkg.repository.url} copyright:${pkg.author} licensed:${pkg.license}`;

const env = process.env.NODE_ENV;

const webpack = require('webpack');

const webpackPlugEnv = new webpack.EnvironmentPlugin({
  NODE_ENV: 'development',
  VERSION: pkg.version,
  DEBUG: false
});

const webpackPlugBnr = new webpack.BannerPlugin({
  banner: comment,
});

const babelPlugin = [
  '@babel/plugin-transform-object-assign'
];

const config = {
  mode: env || 'development',
  entry: {
    'js-multi-data-module': './src/js-multi-data-module.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'MULTI_DATA_MODULE',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false
                  }
                ]
              ],
              plugins: babelPlugin
            }
          }
        ],
      }
    ]
  },
  plugins: [
    webpackPlugEnv,
    webpackPlugBnr
  ]
};

module.exports = config;
