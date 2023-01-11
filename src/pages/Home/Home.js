import React from "react";
import PwdGenerator from "../../components/PwdGenerator/PwdGenerator";

import styles from "./Home.module.css";

export default function Home(){
    return (
    <div className={styles.background}>
        <PwdGenerator />
    </div>
    );


};