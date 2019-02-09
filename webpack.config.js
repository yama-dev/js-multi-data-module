const pkg = require('./package.json');

const comment = `JS MULTI_DATA_MODULE (JavaScript Library)
  ${pkg.name}
Version ${pkg.version}
Repository ${pkg.repository.url}
Copyright ${pkg.author}
Licensed ${pkg.license}`;

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
        test: /\.js$/,
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
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    webpackPlugEnv,
    webpackPlugBnr
  ]
};

module.exports = config;
