import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

let App = () => {
    return <Hello
        compiler="TypeScript"
        framework="React"
    />;
};


ReactDOM.render(
    <App />,
    document.getElementById("root")
);
