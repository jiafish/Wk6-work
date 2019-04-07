let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/js/script.js',
       output: {
          path: path.join(__dirname, 'dist'),
          filename: 'bundle.js',
          publicPath: './'
       },
       module:{
         rules:[
            {
               test: /\.(jpe?g|png|gif|svg)$/,
               use: [
                  {
                     loader: 'url-loader',
                     options: {
                        limit: 40000,
                        outputPath: './images',
                        publicPath: './images'
                     }
                  },
                  'image-webpack-loader'
               ]
            },
            {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                  use: [{
                     loader:'css-loader',
                     options:{
                        url:false}
                  },
                  {
                     loader:'postcss-loader'
                  }]
               }),
            },
         ]
      },
   plugins: [
         new ExtractTextPlugin('css/style.css'),
         new HtmlWebpackPlugin({
            template: 'assets/index.html',
         })
      ]
    }