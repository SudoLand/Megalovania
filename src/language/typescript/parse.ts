/**
 * @author WMXPY
 * @namespace Megalovania_Language_Typescript
 * @description Parse
 */

import { createSourceFile, ScriptTarget, SourceFile } from "typescript";

export const parseTypeScriptScript = (script: string): void => {

    const result: SourceFile = createSourceFile(
        "source.ts",
        script,
        ScriptTarget.Latest,
    );

    console.log(result.getText(result));
};
