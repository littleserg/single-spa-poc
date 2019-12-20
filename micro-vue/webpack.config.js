const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        'main': './src/vue.app.js',
    },
    output: {
        filename: 'micro-vue.js',
        library: 'micro-vue',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }
};