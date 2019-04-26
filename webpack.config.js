const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },{// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },{// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "START",
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
