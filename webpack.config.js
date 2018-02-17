var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    hot: true
  }
}