/**
 * @author WMXPY
 * @namespace Megalovania_Util
 * @description Path
 */

import * as Path from "path";

export const joinFromRoot = (...paths: string[]): string => {

    return Path.join(__dirname, '..', '..', ...paths);
};

export const joinFromSrc = (...paths: string[]): string => {

    return Path.join(__dirname, '..', ...paths);
};
