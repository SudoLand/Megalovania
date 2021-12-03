/**
 * @author WMXPY
 * @namespace Megalovania_Util
 * @description IO
 */

import { directoryFiles, isFile } from "@sudoo/io";
import * as Path from "path";

export const readRecursiveFiles = async (path: string): Promise<string[]> => {

    const filesAndFolders: string[] = await directoryFiles(path);

    const result: string[] = [];

    for (const fileOrFolder of filesAndFolders) {

        const joinedPath: string = Path.join(path, fileOrFolder);
        if (await isFile(joinedPath)) {

            result.push(fileOrFolder);
            continue;
        }

        const subFiles: string[] = await readRecursiveFiles(joinedPath);
        result.push(...subFiles);
    }

    return result;
};
