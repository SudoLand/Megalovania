/**
 * @author WMXPY
 * @namespace Megalovania_CLI
 * @description Argv
 */

export const getArgvFolderName = (): string => {

    const argv: string[] = process.argv.slice(2);

    if (argv.length !== 1) {

        throw new Error('Usage: megalovania [folder]');
    }

    const folder: string = argv[0];
    return folder;
};
