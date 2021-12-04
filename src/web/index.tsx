/**
 * @author WMXPY
 * @namespace Megalovania_Web
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Entry } from "./entry";

declare const module: any;

ReactDOM.render(
    (<Entry />),
    document.getElementById("container"),
);

if (module.hot) {
    module.hot.accept();
}
