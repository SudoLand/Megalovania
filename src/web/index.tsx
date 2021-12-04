/**
 * @author WMXPY
 * @namespace Megalovania_Web
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { Entry } from "./entry";

declare const module: any;
declare const require: any;

const render: (App: any) => void = (App: any): void => {

    const Hot = hot(module)(App);
    ReactDOM.render(
        (<Hot />),
        document.getElementById("container"));
};

render(Entry);
if (module.hot) {
    module.hot.accept();
}
