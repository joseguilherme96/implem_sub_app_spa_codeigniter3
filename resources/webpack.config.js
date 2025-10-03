const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    mode: modoDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        static: {
            directory: './build'
        },
        port: 9000,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-browser.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    modoDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ],
    },
    optimization: {
        minimizer: modoDev ? [] : [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new VuetifyPlugin({ autoImport: true }),
        new MiniCssExtractPlugin()
    ]


}