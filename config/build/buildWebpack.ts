import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins, development} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import type {BuildOptions, BuildType} from "./type/type";



export const buildWebpackOptions = (options: BuildOptions) =>{
    const {mode, paths} = options
    const Dev = mode === development

    return <BuildType>{
        mode: mode ?? development,
        entry: paths.entry,
        output: {
            filename: 'js/[name].[contenthash].js',
            chunkFilename: "js/chunk/chunk[name].[carts].[contenthash:8].js",
            assetModuleFilename: 'img/[hash][ext][query]',
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