const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, '../dist/admin'),
    filename: 'index_bundle.js'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    })
  ]
};
