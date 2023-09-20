/* eslint-disable @typescript-eslint/no-var-requires */
const openBrowser = require('react-dev-utils/openBrowser');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    open: false,
    port: 3000,
    hot: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    onListening: function (devServer) {
      const { port } = devServer.server.address();
      openBrowser(`http://localhost:${port}`);
    },
  },
};
