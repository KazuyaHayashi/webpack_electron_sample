const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = [
    // For main process
    {
        entry: './src/main/main.ts',
        output: {
            path: path.resolve(__dirname, 'dist/main'),
            filename: 'main.js'
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: 'ts-loader',
                    include: path.resolve(__dirname, 'src/'),
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        node: {
            __filename: false,
            __dirname: false,
        },
        target: 'electron-main',
    },
    // For renderer process
    {
        entry: './src/renderer/renderer.ts',
        output: {
            path: path.resolve(__dirname, 'dist/renderer'),
            filename: 'renderer.js'
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    include: path.resolve(__dirname, 'src/'),
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
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
