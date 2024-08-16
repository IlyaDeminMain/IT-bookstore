import {Configuration} from "webpack-dev-server";
import {Compiler, ResolveOptions, RuleSetRule, WebpackPluginInstance} from "webpack";

interface BuildPaths {
    entry: string,
    html: string,
    output: string,
    src: string,
    public: string
}

type BuildMode = "production" | "development";

interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: BuildMode,
    analyzer?: boolean
}

interface BuildType {
    mode: "production" | "development";
    output: {
        path: string;
        filename: string;
        assetModuleFilename: string
        clean: boolean
    };
    devtool: string;
    devServer: Configuration;
    entry: string;
    resolve: ResolveOptions;
    plugins: (false | "" | 0 | ((this: Compiler, compiler: Compiler) => void) | WebpackPluginInstance | null | undefined)[];
    module: { rules: (false | "" | 0 | RuleSetRule | "..." | null | undefined)[] }
}

export type {
    BuildPaths,
    BuildMode,
    BuildOptions,
    BuildType
}