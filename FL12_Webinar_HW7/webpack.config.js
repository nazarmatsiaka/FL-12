const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.npm_lifecycle_script.match(/--mode ([a-zA-Z]*)/)[1];

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `js/app.js`,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin([
            { from: './src/img', to: 'img' }
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.s?css/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devtool: mode === 'production' ? false : 'cheap-module-source-map',
    devServer: {
        port: 1000
    }
}
