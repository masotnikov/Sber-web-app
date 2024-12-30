import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";


const config: Configuration = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        path: path.resolve(__dirname, 'src', 'index.ts'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: '[contenthash:8].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: "[contenthash:8].html"
        }),
        new webpack.ProgressPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        open: true,
        port: 3000,
        client: {
            overlay: false
        },
        historyApiFallback: true,
        hot: true
    }

}

export default config;