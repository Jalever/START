import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./styles.scss";

import { Hello } from "./components/hello";

const App = () => {
    return(
        <React.Fragment>
            <Hello 
                compiler={333}
                framework="Jalever"
            />
        </React.Fragment>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);