var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: './app/index.html'}), new MiniCssExtractPlugin()],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    }
}