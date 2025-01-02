import {ModuleOptions} from 'webpack';
import {BuildOptions} from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): ModuleOptions['rules'] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.(css|s[ac]ss)$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                    },
                },
            },

            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader,
    ]
}