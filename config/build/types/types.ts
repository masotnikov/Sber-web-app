export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}