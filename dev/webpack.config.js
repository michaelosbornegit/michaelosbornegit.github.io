const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {

  // FOR DEVELOPMENT
  mode: 'production',
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '../')
  // },


  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Michael Osborne',
    }),

    // cleanup everything thats not related to development in the root directory for
    // deploying to github pages. (static files must be in root directory for gh pages)
    new WebpackCleanupPlugin({
      exclude: ['dev/**', '.gitignore', '.git/**', 'README.md'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    usedExports: true,
  }
};