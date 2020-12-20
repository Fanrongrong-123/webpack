const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const base = require('./webpack.config.base.js')



module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    mode: "production",

    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/, //css-loader读所有以.css结尾的css文件到js
                use: [  //css抽成文件，再引入到html
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    }
}