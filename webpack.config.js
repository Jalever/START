const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-modules-typescript-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader"
                }]
            }, {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: ["source-map-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Chatbot",
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components")
        },
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"]
    }
};