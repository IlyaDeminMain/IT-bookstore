import {Compiler, ResolveOptions, RuleSetRule, WebpackPluginInstance} from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins, Status} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./type/type";
import {Configuration} from "webpack-dev-server";


interface BuildType {
    mode: "production" | "development";
    output: {
        path: string;
        filename: string;
        clean: boolean
    };
    devtool: string;
    devServer: Configuration;
    entry: string;
    resolve: ResolveOptions;
    plugins: (false | "" | 0 | ((this: Compiler, compiler: Compiler) => void) | WebpackPluginInstance | null | undefined)[];
    module: { rules: (false | "" | 0 | RuleSetRule | "..." | null | undefined)[] }
}

export const buildWebpackOptions = (options: BuildOptions) =>{
    const {development} = Status
    const {mode, paths} = options
    const Dev = mode === development

    return <BuildType>{
        mode: mode ?? development,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: Dev ? "inline-source-map" : false,
        devServer: Dev ? buildDevServer(options) : undefined,
        resolve: buildResolvers(options)
    };
}