const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
 
module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
      category: path.resolve(__dirname, './src/category.js'),
      cart: path.resolve(__dirname, './src/cart.js'),
      description: path.resolve(__dirname, './src/description.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/category.html'),
            filename: 'category.html',
            chunks: ['category']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/description.html'),
            filename: 'description.html',
            chunks: ['description']
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, './src/cart.html'),
            filename: 'cart.html',
            chunks: ['cart']
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                {from: "src/images", to: "images"},
            ],
        }),
    ],
    module: {
        rules: [
            
           // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/, 
                type: 'asset/resource', 
            }, 
            { 
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
                type: 'asset/inline', 
            }, 
            { 
                test: /\.(scss|css)$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'], 
            }, 
         ]
     },

    mode: 'development',
     devServer: { 
      historyApiFallback: true,
      static: './dist',
      //contentBase: path.resolve(__dirname, './dist'),
      open: true, compress: true, hot: true, port: 8080, }, 

      optimization :{
        splitChunks: {
            cacheGroups: {
             vendor: {
              test: /[\\/]node_modules[\\/].*\.js$/,
              chunks: 'all'
             }
            }
           }
      }
}