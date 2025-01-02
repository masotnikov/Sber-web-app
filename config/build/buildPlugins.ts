import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {Configuration} from "webpack";
import {BuildOptions} from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "css/[name].[contenthash:5].css",
        })
    ].filter(Boolean);
}