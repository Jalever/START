import * as React from "react";
import styles from "./styles.scss";

export interface HelloProps {
    compiler: number,
    framework: string
};

export const Hello = (props: HelloProps) => {
    return (
        <React.Fragment>
            <h1
                className={styles.hello}
            >Hello from {props.compiler} and {props.framework}</h1>
        </React.Fragment>
    );
};