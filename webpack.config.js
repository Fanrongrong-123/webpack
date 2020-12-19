const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development", // "production" | "development" | "none"
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: "./src/index.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"), // string (default)
        filename: "[name].[contenthash].js"// string (default) hash:便于添加缓存
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Custom template using Handlebars',使用template里index.html文件的title（默认）
            title: 'webpack-demo',
            template: 'src/assets/test.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //css-loader读所有以.css结尾的css文件到js
                use: ['style-loader', 'css-loader']//style-loader把css-loader读到的内容，转换成一个style标签放到header里面
            }
        ]
    }
}