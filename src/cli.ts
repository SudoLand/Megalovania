/**
 * @author WMXPY
 * @namespace Megalovania
 * @description CLI
 */

import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { MegalovaniaItem, readRecursiveMegalovaniaItems } from "./cli/io";

(async () => {

    const argv: string[] = process.argv.slice(2);

    if (argv.length !== 1) {

        console.log('Usage: megalovania [folder]');
        return;
    }

    const folder: string = argv[0];

    const items: MegalovaniaItem[] = await readRecursiveMegalovaniaItems(folder);

    console.log(items);

    process.exit(0);

    const webpackConfig: Webpack.Configuration = {

    };

    const devServerOptions: WebpackDevServer.Configuration = {

        open: true,
    };

    const compiler: Webpack.Compiler = Webpack(webpackConfig);
    const devServer: WebpackDevServer = new WebpackDevServer(devServerOptions, compiler);

    await devServer.start();
})();
