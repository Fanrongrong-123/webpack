const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
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
    ]
}