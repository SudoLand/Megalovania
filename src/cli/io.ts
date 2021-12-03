/**
 * @author WMXPY
 * @namespace Megalovania_CLI
 * @description IO
 */

import { readTextFile } from "@sudoo/io";
import * as Path from "path";
import { MegalovaniaConfig, OriginalMegalovaniaConfig } from "../config/declare";
import { parseOriginalConfig } from "../config/parse";
import { readRecursiveFiles } from "../util/io";

export type MegalovaniaItem = {

    readonly config: MegalovaniaConfig;

    readonly jsonPath: string;
    readonly scriptPath: string;
};

const AvailableExtensions: string[] = ['tsx', 'ts', 'jsx', 'js'];

export const readRecursiveMegalovaniaItems = async (folderPath: string): Promise<MegalovaniaItem[]> => {

    const result: MegalovaniaItem[] = [];

    const fixedFolderPath: string = Path.resolve(folderPath);
    const files: string[] = await readRecursiveFiles(fixedFolderPath);

    const fixedFiles: string[] = files.map((filePath: string) => Path.join(fixedFolderPath, filePath));

    for (const file of fixedFiles) {

        if (file.endsWith('.megalovania.json')) {

            const scriptWithoutSuffix: string = file.substring(0, file.length - '.megalovania.json'.length);

            console.log(scriptWithoutSuffix);

            for (const availableExtension of AvailableExtensions) {

                if (fixedFiles.includes(`${scriptWithoutSuffix}.${availableExtension}`)) {

                    const config: string = await readTextFile(file);

                    try {

                        const originalConfig: OriginalMegalovaniaConfig = JSON.parse(config);
                        const parsedConfig: MegalovaniaConfig = parseOriginalConfig(originalConfig);

                        result.push({

                            config: parsedConfig,

                            jsonPath: file,
                            scriptPath: `${scriptWithoutSuffix}.${availableExtension}`,
                        });
                    } catch (error) {

                        throw new Error(`[Megalovania] Failed to parse config: ${file}`);
                    }
                }
            }
        }
    }
    return result;
};
