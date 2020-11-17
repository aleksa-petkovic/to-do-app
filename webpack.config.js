const path = require('path')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    }
}