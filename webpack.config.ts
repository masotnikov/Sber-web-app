import type {Configuration} from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/types";
import path from "path";


export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build')
    }

    const mode = env.mode || "development";
    const PORT = env.port|| 3000;

    const config: Configuration = buildWebpackConfig({
        paths,
        mode,
        port: PORT,

    });
    return config;
}