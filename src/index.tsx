import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "@components/Hello/index";

import Footer from "@components/Footer/index";

import * as styles from "./styles.scss";

const App = () => {
    return(
        <React.Fragment>
            <h1 className={styles.title}>Hello Jalever</h1>
            <Hello 
                compiler="Youtube"
                framework="Google"
            />

            <Footer />
        </React.Fragment>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);