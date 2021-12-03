/**
 * @author WMXPY
 * @namespace Megalovania
 * @description CLI
 */

import * as Path from "path";
import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { readRecursiveFiles } from "./util/io";

(async () => {

    const argv: string[] = process.argv.slice(2);

    if (argv.length !== 1) {

        console.log('Usage: megalovania [folder]');
        return;
    }

    const folder: string = argv[0];
    const fixedFolderPath: string = Path.resolve(folder);

    const files: string[] = await readRecursiveFiles(fixedFolderPath);
    const fixedFiles: string[] = files.map((filePath: string) => Path.join(fixedFolderPath, filePath));

    console.log(fixedFiles);

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
