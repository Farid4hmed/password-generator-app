import React, { useState } from "react";
import PwdGenerator from "../../components/PwdGenerator/PwdGenerator";
import RecentPasswords from "../../components/recentPasswords/RecentPasswords";

import styles from "./Home.module.css";

export default function Home(){
    const [recent, setRecent] = useState([""]);
    return (
    <div className={styles.background}>
        <PwdGenerator recent={recent} setRecent={setRecent}/>
        <RecentPasswords recent={recent} setRecent={setRecent}/>
    </div>
    );


};