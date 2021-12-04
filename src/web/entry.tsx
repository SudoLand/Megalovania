/**
 * @author WMXPY
 * @namespace Megalovania_Web
 * @description Entry
 */

import React from "react";

export const Entry: React.FC = () => {

    const [count, setCount] = React.useState(0);
    return (
        <React.Fragment>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </React.Fragment>
    );
};
