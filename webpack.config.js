const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const mainProcessConfig = {
    entry: './src/main/main.ts',
    output: {
        path: path.resolve(__dirname, 'build/main'),
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
};

const rendererProcessConfig = {
    entry: './src/renderer/renderer.ts',
    output: {
        path: path.resolve(__dirname, 'build/renderer'),
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
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    target: 'electron-renderer',
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/assets/img/',
                to: '../assets/img/'
            },
            {
                from: 'src/assets/style/',
                to: '../assets/style/'
            }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: path.resolve(__dirname, 'build/html/index.html')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['assets/style/style.css'],
            append: false,
            publicPath: '../'
        }),
        new VueLoaderPlugin(),
    ]
};

module.exports = [
    mainProcessConfig,
    rendererProcessConfig
];
