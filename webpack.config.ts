import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// We use require because the lib doesn't have typings
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config: webpack.Configuration = {
    entry: [
        "react-hot-loader/patch",
        "./src/index.tsx",
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new FaviconsWebpackPlugin('./src/assets/favicon.png'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Todo List App',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './src/index.ejs')
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            },
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    devServer: {
        hot: true
    }

};

export default config;
