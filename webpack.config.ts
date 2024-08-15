import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import {buildWebpackOptions} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/type/type";

interface EnvVar {
    mode?: BuildMode,
    port?: number,
    analyzer?: boolean
}


export default ( env: EnvVar )=> {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, "src"),
    }

    const config: webpack.Configuration = buildWebpackOptions({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths: paths,
        analyzer: env.analyzer,
    })
    return config
}