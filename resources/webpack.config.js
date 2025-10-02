const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

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
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VuetifyPlugin({ autoImport: true })
    ]


}