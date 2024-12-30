import {ModuleOptions} from 'webpack';

export function buildLoaders(): ModuleOptions['rules'] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader
    ]
}