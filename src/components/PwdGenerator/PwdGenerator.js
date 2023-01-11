import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./PwdGenerator.module.css";
import ReactSlider from "react-slider";

export default function PwdGenerator(){
    const [copyText, setCopyText] = useState('Bellow');
    const [value, setValue] = useState(0);
    function handleChange(val){
        setValue(val);
    }
    return (
        <div className={styles.parent}>
            <p className={styles.title}>Password Generator</p>

            <div className={styles.password}>
                <h1>{copyText}</h1>
                 <CopyToClipboard className={styles.copy} text={copyText}>
                    {/* <button className={styles.copy} type="submit"> */}
                    <svg width="25" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="20" fill="#1E1E1E"/>
                    <rect width="1280" height="910" transform="translate(-835 -199)" fill="#0C0B10"/>
                        <rect x="-435" y="-26" width="480" height="70" fill="#24232B"/>
                    <mask id="path-2-inside-1_0_1" fill="white">
                    <path d="M1.89474 20C1.37368 20 0.92779 19.8221 0.557053 19.4664C0.185684 19.11 0 18.6818 0 18.1818V5.45455H1.89474V18.1818H12.3158V20H1.89474ZM5.68421 16.3636C5.16316 16.3636 4.71726 16.1858 4.34653 15.83C3.97516 15.4736 3.78947 15.0455 3.78947 14.5455V1.81818C3.78947 1.31818 3.97516 0.89 4.34653 0.533636C4.71726 0.177879 5.16316 0 5.68421 0H12.3158L18 5.45455V14.5455C18 15.0455 17.8146 15.4736 17.4439 15.83C17.0725 16.1858 16.6263 16.3636 16.1053 16.3636H5.68421ZM11.3684 6.36364H16.1053L11.3684 1.81818V6.36364Z"/>
                    </mask>
                    <path d="M1.89474 20C1.37368 20 0.92779 19.8221 0.557053 19.4664C0.185684 19.11 0 18.6818 0 18.1818V5.45455H1.89474V18.1818H12.3158V20H1.89474ZM5.68421 16.3636C5.16316 16.3636 4.71726 16.1858 4.34653 15.83C3.97516 15.4736 3.78947 15.0455 3.78947 14.5455V1.81818C3.78947 1.31818 3.97516 0.89 4.34653 0.533636C4.71726 0.177879 5.16316 0 5.68421 0H12.3158L18 5.45455V14.5455C18 15.0455 17.8146 15.4736 17.4439 15.83C17.0725 16.1858 16.6263 16.3636 16.1053 16.3636H5.68421ZM11.3684 6.36364H16.1053L11.3684 1.81818V6.36364Z" fill="#24232B" stroke="#A6FEB0" stroke-width="4" mask="url(#path-2-inside-1_0_1)"/>
                    </svg>
                    {/* </button> */}
                 </CopyToClipboard>

            </div>







            <div className={styles.generator}>
            <p className={styles.charLength}>Character Length</p>
            <h1 className={styles.value}> {value} </h1>
            <ReactSlider
             className="customSlider"
             trackClassName="customSlider-track"
             thumbClassName="customSlider-thumb"
             defaultValue={0}
             min={0}
             max={10}
             value={value}
             onChange={val => {handleChange(val)}}
            />
            <button className={styles.uppercase}></button><p className={styles.text1}>Include Uppercase Letters</p>
            <button className={styles.lowercase}></button><p className={styles.text2}>Include Lowercase Letters</p>
            <button className={styles.numbers}></button><p className={styles.text3}>Include Numbers</p>
            <button className={styles.symbols}></button><p className={styles.text4}>Include Symbols</p>

            <div className={styles.strength}>
                <p className={styles.strengthTitle}>STRENGTH</p>
                <div className={styles.strengthBar1}></div>
                <div className={styles.strengthBar2}></div>
                <div className={styles.strengthBar3}></div>
                <div className={styles.strengthBar4}></div>
            </div>
            <button className={styles.generate}><b style={{fontFamily: "monospace", fontSize: "15px" }}>❖ Generate ❖</b></button>
            </div>
        </div>
    );
}



//