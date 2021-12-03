/**
 * @author WMXPY
 * @namespace Megalovania_Config
 * @description Parse
 */

import { MegalovaniaConfig, OriginalMegalovaniaConfig } from "./declare";

export const parseOriginalConfig = (config: OriginalMegalovaniaConfig): MegalovaniaConfig => {

    const result: MegalovaniaConfig = {

        components: [],
    };

    if (typeof config.component === 'string') {

        result.components.push(config.component);
    }

    if (Array.isArray(config.components)) {

        result.components.push(...config.components);
    }

    return result;
};
