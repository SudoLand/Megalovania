/**
 * @author WMXPY
 * @namespace Megalovania_CLI_Webpack
 * @description Development
 */

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { joinFromRoot, joinFromSrc } from "../../util/path";

export const createDevServerConfiguration = (): WebpackDevServer.Configuration => {

    const devServerOptions: WebpackDevServer.Configuration = {

        static: joinFromRoot('dist'),
        port: '8765',
        open: true,
        hot: false,
        client: false as any,
    };
    return devServerOptions;
};

export const createWebpackConfiguration = (): Webpack.Configuration => {

    const webpackConfig: Webpack.Configuration = {

        entry: [
            'webpack/hot/dev-server.js',
            'webpack-dev-server/client/index.js?hot=true&live-reload=true',
            joinFromSrc('web', 'index.tsx'),
        ],
        output: {
            filename: "[name].bundle.js",
            path: joinFromRoot('dist'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/i,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            configFile: joinFromRoot('typescript', 'tsconfig.web.dev.json'),
                            transpileOnly: false,
                        },
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        mode: 'development',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: joinFromSrc('web', 'template.ejs'),
                filename: 'index.html',
                minify: false,
            }),
            new Webpack.HotModuleReplacementPlugin(),
        ],
    };
    return webpackConfig;
};
