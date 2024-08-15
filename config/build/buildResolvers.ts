import {Configuration} from "webpack";
import {BuildOptions} from "./type/type";

export const buildResolvers = (options: BuildOptions):Configuration['resolve']=>{
    return {
        extensions: ['.tsx', '.ts', '.js', '.css'],
        alias: {
            "@": options.paths.src
        }
    }
}