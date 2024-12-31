import {ModuleOptions} from 'webpack';
import {BuildOptions} from "./types/types";

export function buildLoaders({isDev} : BuildOptions): ModuleOptions['rules'] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]--[local]--[hash:base64:4]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    return [
        tsLoader,
        cssLoader,
    ]
}