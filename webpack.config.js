const path = require('path')
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: './src/main.js',
    resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler",
        },
      },
      devServer: {
        static: path.join(__dirname, "src"),
        compress: true,
        port: 8081,
      },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
        new VueLoaderPlugin(),
    ]
}