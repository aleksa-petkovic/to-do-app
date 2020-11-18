var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: './dist/index.html'})],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    }
}