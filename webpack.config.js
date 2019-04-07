let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './assets/js/script.js',
       output: {
          path: path.join(__dirname, 'dist'),
          filename: 'bundle.js',
          publicPath: './dist'
       },
       module:{
         rules:[
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
      ]
    }