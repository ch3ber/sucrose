const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMiniminizerPlugin = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js'
   },
   mode: 'production',
   resolve: {
      extensions: ['.js'],
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.html$/,
            use: [
               { loader: 'html-loader' }
            ]
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader",
            ],
         },
         {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|webp)$/i,
            type: "asset",
         },
      ]
   },
   plugins: [
      new htmlWebpackPlugin({
         inject: true,
         template: './public/index.html',
         filename: './index.html'
      }),
      new htmlWebpackPlugin({
         inject: true,
         template: './public/app.html',
         filename: './app.html'
      }),
      new miniCssExtractPlugin({
         filename: "assets/[name].[contenthash].css"
      }),
      new CleanWebpackPlugin()
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new cssMiniminizerPlugin()
      ]
   }
}
