/**@type {webpack}**/  //提供webpack相關方法
let path = require('path');

module.exports={
    mode: process.env.NODE_ENV ,
    context: path.resolve(__dirname, 'src'),
    entry:{
        index: './js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js'
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        }
    }
}