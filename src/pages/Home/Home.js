import React, { useState } from "react";
import PwdGenerator from "../../components/PwdGenerator/PwdGenerator";
import RecentPasswords from "../../components/recentPasswords/RecentPasswords";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Home.module.css";

export default function Home(){
    const [recent, setRecent] = useState([""]);
    function handleCopy() {
        toast.success("Copied!");
    }
    return (
    <div className={styles.background}>
        <PwdGenerator recent={recent} setRecent={setRecent} handleCopy={handleCopy}/>
        <RecentPasswords recent={recent} setRecent={setRecent} handleCopy={handleCopy}/>
        <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </div>
    );


};