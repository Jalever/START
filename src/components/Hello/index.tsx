import * as React from "react";

import * as styles from "./styles.scss";

interface HelloProps {
    compiler: String,
    framework: String
};

const Hello = (props: HelloProps) => {
    return(
        <React.Fragment>
            <h4 className={styles.hello}>Hello from {props.compiler} and {props.framework}</h4>
        </React.Fragment>
    );
};

export default Hello;