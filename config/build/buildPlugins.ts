import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import type {BuildOptions} from "./type/type";

export const {development, production} = {
    development: "development",
    production: "production"
} as const

export const buildPlugins = ({mode, paths, analyzer}: BuildOptions):Configuration['plugins']=>{

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
        new FaviconsWebpackPlugin({
            logo: path.resolve(paths.public, 'favicon.svg'),
            prefix: 'icon/',
        }),
        new DefinePlugin({
            __ENV__: JSON.stringify(mode)
        }),
    ].filter(Boolean)

    switch (mode) {
        case development:
            plugins.push(new webpack.ProgressPlugin());
            plugins.push(new ReactRefreshWebpackPlugin())
            break;
        case production:
            plugins.push(
                new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[carts].[contenthash:8].css",
            }));
        break;
    }

    if (analyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }

    return [...plugins]
}