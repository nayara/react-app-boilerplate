/* eslint-disable @typescript-eslint/no-var-requires */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rules = [
  {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  },
];

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
