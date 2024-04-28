const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: "哈哈，我是title",
            filename: "app.html",
            template: "./src/html/index.html"
        })
    ],
    devServer: {
        static: '.',
    }
}