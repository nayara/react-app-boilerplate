/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = () => {
  const config = require('./webpack.' + process.env.NODE_ENV);
  return merge(commonConfig, config);
};
