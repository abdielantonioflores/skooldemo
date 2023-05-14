const webpack = require('webpack')
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const currentPath = path.join(__dirname, '../');

const basePath = currentPath + '.env';

const envPath = basePath + '.' + 'development';

const finalPath = fs.existsSync(envPath) ? envPath : basePath;

const fileEnv = dotenv.config({ path: finalPath }).parsed;

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {

  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  //   devServer: {
  //     historyApiFallback: true,
  //     index:'/dist/index.html'
  //  },
  devServer: {
    // remove the invalid "index" property
    historyApiFallback: true,
    allowedHosts: [
      'localhost'
    ],
    hot: true,
    // other valid dev server options...
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin(envKeys),
  ],
}