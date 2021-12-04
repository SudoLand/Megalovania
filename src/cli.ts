/**
 * @author WMXPY
 * @namespace Megalovania
 * @description CLI
 */

import { readTextFile } from "@sudoo/io";
import { getArgvFolderName } from "./cli/argv";
import { MegalovaniaItem, readRecursiveMegalovaniaItems } from "./cli/io";
import { parseTypeScriptScript } from "./language/typescript/parse";
// import { startWebpackDevelopment } from "./cli/webpack/start";

const startCLI = async () => {

    const folder: string = getArgvFolderName();

    const items: MegalovaniaItem[] = await readRecursiveMegalovaniaItems(folder);

    for (const item of items) {

        if (item.language === 'typescript') {

            parseTypeScriptScript(await readTextFile(item.scriptPath));
        }
    }

    // await startWebpackDevelopment();
};

(async () => {

    console.log(`[Megalovania] Staring`);

    try {

        await startCLI();
        console.log(`[Megalovania] Terminated`);
    } catch (err) {

        console.log(`[Megalovania] Failed due to an Error`);
        console.log(`[Megalovania] Error - ${(err as any).message}`);
    }
})();
