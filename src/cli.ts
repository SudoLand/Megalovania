/**
 * @author WMXPY
 * @namespace Megalovania
 * @description CLI
 */

import * as Webpack from "webpack";

Webpack({

}, (err?: Error, stats?: Webpack.Stats) => {

    if (typeof err !== 'undefined'
        && err !== null) {

        console.log(err);
        console.log("FAILED");
        return;
    }

    console.log("SUCCEED");
});
