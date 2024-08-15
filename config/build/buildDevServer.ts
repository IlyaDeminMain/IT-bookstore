import type {Configuration} from  "webpack-dev-server"
import {BuildOptions} from "./type/type";

export const buildDevServer = ({port}: BuildOptions):Configuration=>{
    return {
        port: port ?? 3000,
        open: true,
        // if you distribute static data via nginx, then you need to proxy it to Index.html
        historyApiFallback: true,
        hot: true
    }
}