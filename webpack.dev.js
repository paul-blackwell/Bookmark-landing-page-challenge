const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-cheap-source-map', // Stops a devTools warning 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Inject styles into dom
                    "css-loader",  // 2. Turns css into common js
                    "sass-loader" // 1. Turns sass into css
                ]
            },
        ]
    }
});