const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: "development",
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/, //css-loader读所有以.css结尾的css文件到js
                use: ['style-loader', 'css-loader']
                //style-loader把css-loader读到的内容，转换成一个style标签放到header里面(js生成style)
            }
        ]
    }
}