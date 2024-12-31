import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export function buildPlugins({paths}: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}