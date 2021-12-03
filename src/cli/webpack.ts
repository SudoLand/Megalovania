/**
 * @author WMXPY
 * @namespace Megalovania_CLI
 * @description Webpack
 */

import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";

export const startWebpack = async (): Promise<void> => {

    const webpackConfig: Webpack.Configuration = {

    };

    const devServerOptions: WebpackDevServer.Configuration = {

        open: true,
    };

    const compiler: Webpack.Compiler = Webpack(webpackConfig);
    const devServer: WebpackDevServer = new WebpackDevServer(devServerOptions, compiler);

    await devServer.start();
};
