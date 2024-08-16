import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptions} from "./type/type";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {development} from "./buildPlugins";


export const buildLoaders = ({mode}: BuildOptions): ModuleOptions['rules']=>{
    const Dev = mode === development

    const cssLoaderModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: Dev ? '[path[name]__[local]]' : '[hash:base64:8]'
            }
        }
    }

    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            Dev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderModules,
            "sass-loader",
        ],
    }

    const tsLoader = {
        // ts-loader can work with jsx
        // if don't use TypeScript, then babel-loader is better
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
            transpileOnly: Dev,
            getCustomTransformers: () => ({
                before: [Dev && ReactRefreshTypeScript()].filter(Boolean),
            }),
        },
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        }

    return [cssLoader, scssLoader, tsLoader, assetsLoader, svgLoader]
}