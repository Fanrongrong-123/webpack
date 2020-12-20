const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"// string (default) hash:便于添加缓存
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo',
            template: 'src/assets/test.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
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