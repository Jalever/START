## Director Structure
```text
|   .babelrc
|   .gitignore
|   output.txt
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.json
|   webpack.config.js
|               
\---src
    |   declarations.d.ts
    |   index.html
    |   index.tsx
    |   styles.scss
    |   styles.scss.d.ts
    |   
    \---components
        \---Hello
                index.tsx
                styles.scss
                styles.scss.d.ts
```

## Dependencies
```js
npm i -D webpack webpack-cli webpack-dev-server
npm i -D react react-dom @types/react @types/react-dom
npm i -D babel-loader babel-core babel-preset-env babel-preset-react
npm i -D style-loader css-loader node-sass sass-loader @types/node-sass
npm i -D css-modules-typescript-loader
npm i -D html-webpack-plugin clean-webpack-plugin
npm i -D typescript awesome-typescript-loader source-map-loader

@babel/core: ^7.0.0,
@babel/preset-env: ^7.0.0,
@babel/preset-react: ^7.0.0,
@types/node-sass: ^4.11.0,
@types/react: ^16.8.20,
@types/react-dom: ^16.8.4,
awesome-typescript-loader: ^5.2.1,
babel-loader: ^8.0.6,
clean-webpack-plugin: ^3.0.0,
css-loader: ^3.0.0,
css-modules-typescript-loader: ^2.0.3,
html-webpack-plugin: ^3.2.0,
node-sass: ^4.12.0,
react: ^16.8.6,
react-dom: ^16.8.6,
sass-loader: ^7.1.0,
source-map-loader: ^0.2.4,
style-loader: ^0.23.1,
typescript: ^3.5.2,
webpack: ^4.34.0,
webpack-cli: ^3.3.4,
webpack-dev-server: ^3.7.1
```

## webpack.config.js 
```js
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
```

## .babelrc
Firstly,we should create a file named `.babelrc`,which was written down
```
{
    "presets": ["env", "react"]
}
```
and then, use command `npx babel-upgrade --write --install` upgraded babel-like loaders.

## tsconfig.json
we can use `npx tsc --init` generate tsconfig.json autamatically
```json
{
  "compilerOptions": {                  /* Enable incremental compilation */
    "target": "es5",   
    "module": "commonjs",                   /* Report errors in .js files. */
    "jsx": "react",  
    "sourceMap": true,  
    "outDir": "./dist/", 
    "noImplicitAny": true,  
    "moduleResolution": "node",  
    "baseUrl": "./",     
    "paths": {
      "@components/*": ["src/components/*"]
    },     
    "esModuleInterop": true                   /* Enables emit interoperability 
  },
  "include": [
    "./src/**/*"
  ]
}
```

## declarations.d.ts
```js
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
```