const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // HMR shows correct file names in console on update.
        new webpack.NamedModulesPlugin(),
        //Copy Resource
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, "src/assets/img"),
        //     to: path.resolve(__dirname, "dist/assets/img"),
        //     ignore: ['.*']
        // }, {
        //     from: path.resolve(__dirname, "src/assets/media"),
        //     to: path.resolve(__dirname, "dist/assets/media"),
        //     ignore: ['.*']
        // }]),

        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, "src/assets/img"),
                to: path.resolve(__dirname, "dist/assets/img"),
                ignore: ['.*']
        },{
            from: path.resolve(__dirname, "src/assets/fonts"),
            to: path.resolve(__dirname, "dist/assets/fonts"),
            ignore: ['.*']
        }]),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/assets/media"),
            to: path.resolve(__dirname, "dist/assets/media"),
            ignore: ['.*']
        }]),
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, "src/vivoab"),
        //     to: path.resolve(__dirname, "dist/vivoab"),
        //     ignore: ['.*']
        // }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            favicon: './src/assets/img/favicon.png',
            inject: 'body'
        })
    ]
});