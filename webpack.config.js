const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const envify = require('process-envify');

const env = require('./env');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DISTRIBUTION_ROOT = path.join(__dirname, 'dist');

module.exports = ({ prod } = {}) => ({
  mode: prod ? 'production' : 'development',
  context: SOURCE_ROOT,
  entry: [
    !prod && 'webpack/hot/poll?1000',
    './main.ts',
  ].filter(Boolean),
  output: {
    path: DISTRIBUTION_ROOT,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '~': SOURCE_ROOT,
    },
  },
  plugins: [
    new webpack.DefinePlugin(envify(env)),
    !prod && new webpack.HotModuleReplacementPlugin(),
    !prod && new NodemonPlugin(),
  ].filter(Boolean),
  devtool: prod ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
});
