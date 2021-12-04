/**
 * @author WMXPY
 * @namespace Megalovania
 * @description CLI
 */

import { getArgvFolderName } from "./cli/argv";
import { MegalovaniaItem, readRecursiveMegalovaniaItems } from "./cli/io";
import { startParcelDevelopment } from "./cli/parcel/development";

const startCLI = async () => {

    const folder: string = getArgvFolderName();

    const items: MegalovaniaItem[] = await readRecursiveMegalovaniaItems(folder);

    console.log(items);

    await startParcelDevelopment();
};

(async () => {

    console.log(`[Megalovania] Starting`);

    try {

        await startCLI();
    } catch (err) {

        console.log(`[Megalovania] Failed due to an Error`);
        console.log(`[Megalovania] Error - ${(err as any).message}`);
    }
})();
