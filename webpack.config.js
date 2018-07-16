const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = [
    // For main process
    {
        entry: './src/main/main.js',
        node: {
            __filename: false,
            __dirname: false,
        },
        output: {
            path: path.resolve(__dirname, 'dist/main'),
            filename: 'main.js'
        },
        target: 'electron-main',
    },
    // For renderer process
    {
        entry: './src/renderer/index.js',
        output: {
            filename: 'renderer.js',
            path: path.resolve(__dirname, 'dist/renderer')
        },
        target: 'electron-renderer',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/html/index.html',
                filename: path.resolve(__dirname, 'dist/html/index.html')
            })
        ]
    }
];

module.exports = config;
