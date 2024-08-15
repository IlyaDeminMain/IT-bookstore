import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./type/type";
import path from "path";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export enum Status {
    development = "development",
    production = "production"
}

export const buildPlugins = ({mode, paths, analyzer}: BuildOptions):Configuration['plugins']=>{
    const {development, production} = Status

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico')}),
        new DefinePlugin({
            __ENV__: JSON.stringify(mode)
        }),
    ]

    switch (mode) {
        case development:
            plugins.push(new webpack.ProgressPlugin());
            plugins.push(new ReactRefreshWebpackPlugin())
            break;
        case production:
            plugins.push(
                new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[id].[contenthash:8].css",
            }));
            break;
    }

    if (analyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }

    return [...plugins]
}