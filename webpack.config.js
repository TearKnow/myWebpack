const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        }),
        new MiniCssExtractPlugin(),//要配合HtmlWebpackPlugin使用，在dist/app.html里自动加入了<link href="main.css" rel="stylesheet">
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    devServer: {
        static: '.',
    }
}