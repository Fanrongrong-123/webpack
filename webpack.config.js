const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: "./src/index.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"), // string (default)
        filename: "[name].[contenthash].js"// string (default) hash:便于添加缓存
    }
}