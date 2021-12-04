/**
 * @author WMXPY
 * @namespace Megalovania_CLI_Webpack
 * @description Start
 */

import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { createDevServerConfiguration, createWebpackConfiguration } from "./development";

export const startWebpackDevelopment = async (): Promise<void> => {

    const webpackConfig: Webpack.Configuration = createWebpackConfiguration();

    const devServerOptions: WebpackDevServer.Configuration = createDevServerConfiguration();

    const compiler: Webpack.Compiler = Webpack(webpackConfig);
    const devServer: WebpackDevServer = new WebpackDevServer(devServerOptions, compiler);

    await devServer.start();
};
