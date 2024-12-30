import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {
    return {
        open: true,
        port: 3000,
        client: {
            overlay: false
        },
        historyApiFallback: true,
        hot: true
    }
}