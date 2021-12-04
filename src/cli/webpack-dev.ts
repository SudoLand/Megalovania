/**
 * @author WMXPY
 * @namespace Megalovania_CLI
 * @description Webpack Dev
 */

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { joinFromRoot, joinFromSrc } from "../util/path";

export const startWebpackDevelopment = async (): Promise<void> => {

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
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: joinFromRoot('typescript', 'tsconfig.web.dev.json'),
                                transpileOnly: false,
                            },
                        },
                    ],
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
                chunks: ['index'],
                template: joinFromSrc('web', 'template.ejs'),
                filename: 'index.html',
                minify: false,
                inject: true,
            }),
            new Webpack.HotModuleReplacementPlugin(),
        ],
    };

    const devServerOptions: WebpackDevServer.Configuration = {

        port: '8765',
        static: joinFromRoot('dist'),
        open: true,
        hot: false,
        client: false as any,
    };

    const compiler: Webpack.Compiler = Webpack(webpackConfig);
    const devServer: WebpackDevServer = new WebpackDevServer(devServerOptions, compiler);

    await devServer.start();
};
