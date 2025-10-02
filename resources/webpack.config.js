const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path');

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
        port: 9000

    },


}