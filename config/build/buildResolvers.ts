import {Configuration} from "webpack";
import type {BuildOptions} from "./type/type";

export const buildResolvers = (options: BuildOptions):Configuration['resolve']=>{
    return {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        alias: {
            "@": options.paths.src
        }
    }
}