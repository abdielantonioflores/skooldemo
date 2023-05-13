const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

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
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
      process: {env: 'dev'}
    }),
  ],
}