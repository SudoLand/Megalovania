/**
 * @author WMXPY
 * @namespace Megalovania_CLI_Parcel
 * @description Development
 */

import { Parcel } from "@parcel/core";
import { BuildEvent } from "@parcel/types";
import { joinFromSrc } from "../../util/path";

export const startParcelDevelopment = async (): Promise<void> => {

    const bundler = new Parcel({

        entries: [
            joinFromSrc('web', 'index.html'),
        ],
        defaultConfig: '@parcel/config-default',
        serveOptions: {
            port: 8765,
        },
        hmrOptions: {
            port: 8765,
        },
    });

    await bundler.watch((error: Error | null | undefined, event: BuildEvent | undefined) => {

        if (typeof error !== 'undefined'
            && error !== null) {

            throw error;
        }

        if (typeof event === 'undefined') {
            return;
        }

        if (event.type === 'buildSuccess') {

            let bundles = event.bundleGraph.getBundles();
            console.log(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`);
        } else if (event.type === 'buildFailure') {

            console.log(event.diagnostics);
        }
    });
};
