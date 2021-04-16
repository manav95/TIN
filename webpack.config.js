const path = require("path");
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', ".tsx", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
        hash: true, // This is useful for cache busting
        filename: 'index.html'
    }), new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      hot: true,
    }
}