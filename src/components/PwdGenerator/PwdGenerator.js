import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./PwdGenerator.module.css";
import ReactSlider from "react-slider";


export default function PwdGenerator(props) {
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const numbersSet = "1234567890";
    const symbolSet = "~!@#$%^&*()_+/";

    const [options, setOptions] = useState(0);
    const [uppercase, setUppercase] = useState("#24232B");
    const [lowercase, setLowercase] = useState("#24232B");
    const [numbers, setNumbers] = useState("#24232B");
    const [symbols, setSymbols] = useState("#24232B");
    const [password, setPassword] = useState("P4$5W0rD!");
    const [value, setValue] = useState(0);
    const [barCol1, setBarCol1] = useState("#17161E");
    const [barCol2, setBarCol2] = useState("#17161E");
    const [barCol3, setBarCol3] = useState("#17161E");
    const [barCol4, setBarCol4] = useState("#17161E");

    function UpperCase() {
        if (uppercase === "#A4FFAF") {
            setUppercase("#24232B");
            setOptions(options - 1);
        }
        else { setUppercase("#A4FFAF"); setOptions(options + 1); }
    }
    function LowerCase() {
        if (lowercase === "#A4FFAF") {
            setLowercase("#24232B");
            setOptions(options - 1);
        }
        else { setLowercase("#A4FFAF"); setOptions(options + 1); }
    }
    function Numbers() {
        if (numbers === "#A4FFAF") {
            setNumbers("#24232B");
            setOptions(options - 1);
        }
        else { setNumbers("#A4FFAF"); setOptions(options + 1); }
    }
    function Symbols() {
        if (symbols === "#A4FFAF") {
            setSymbols("#24232B");
            setOptions(options - 1);
        }
        else { setSymbols("#A4FFAF"); setOptions(options + 1); }
    }


    function getRandomChar(charSet) {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    function generatePassword() {
        if (value < options) {
            alert(`Password length should be atleast ${options}`);
        }
        else if (options !== 0) {
            var pwd = "";
            while (pwd.length < value) {
                if (uppercase === "#A4FFAF") pwd += getRandomChar(upperCaseSet);
                if (pwd.length >= value) break;
                if (lowercase === "#A4FFAF") pwd += getRandomChar(lowerCaseSet);
                if (pwd.length >= value) break;
                if (numbers === "#A4FFAF") pwd += getRandomChar(numbersSet);
                if (pwd.length >= value) break;
                if (symbols === "#A4FFAF") pwd += getRandomChar(symbolSet);
            }
            if(password !== "P4$5W0rD!"){
            props.recent.unshift(password);
            props.setRecent([...props.recent]);
            console.log(props.recent);
            }
            setPassword(pwd);

        }
        else { alert("Select Atleast one Character Type"); }
    }

    useEffect(() => {
        if (options === 4) {
            setBarCol4("#A4FFAF");
            setBarCol3("#A4FFAF");
            setBarCol2("#A4FFAF");
            setBarCol1("#A4FFAF");
        }
        else if (options === 3) {
            setBarCol4("#24232B");
            setBarCol3("#A4FFAF");
            setBarCol2("#A4FFAF");
            setBarCol1("#A4FFAF");
        }
        else if (options === 2) {
            setBarCol4("#24232B");
            setBarCol3("#24232B");
            setBarCol2("#A4FFAF");
            setBarCol1("#A4FFAF");
        }
        else if (options === 1) {
            setBarCol4("#24232B");
            setBarCol3("#24232B");
            setBarCol2("#24232B");
            setBarCol1("#A4FFAF");
        }
        else if (options === 0) {
            setBarCol4("#24232B");
            setBarCol3("#24232B");
            setBarCol2("#24232B");
            setBarCol1("#24232B");
        }
    }, [options]);



    function handleChange(val) {
        setValue(val);
    }

    function handleCopy() {
        alert("Copied!");
    }
    return (
        <div className={styles.parent}>
            <p className={styles.title}>Password Generator</p>

            <div className={styles.password}>
                <h1>{password}</h1>
                <CopyToClipboard onCopy={handleCopy} className={styles.copy} text={password}>
                    {/* <button className={styles.copy} onClick={handleClick} type="submit"> */}
                    <svg width="25" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="20" fill="#1E1E1E" />
                        <rect width="1280" height="910" transform="translate(-835 -199)" fill="#0C0B10" />
                        <rect x="-435" y="-26" width="480" height="70" fill="#24232B" />
                        <mask id="path-2-inside-1_0_1" fill="white">
                            <path d="M1.89474 20C1.37368 20 0.92779 19.8221 0.557053 19.4664C0.185684 19.11 0 18.6818 0 18.1818V5.45455H1.89474V18.1818H12.3158V20H1.89474ZM5.68421 16.3636C5.16316 16.3636 4.71726 16.1858 4.34653 15.83C3.97516 15.4736 3.78947 15.0455 3.78947 14.5455V1.81818C3.78947 1.31818 3.97516 0.89 4.34653 0.533636C4.71726 0.177879 5.16316 0 5.68421 0H12.3158L18 5.45455V14.5455C18 15.0455 17.8146 15.4736 17.4439 15.83C17.0725 16.1858 16.6263 16.3636 16.1053 16.3636H5.68421ZM11.3684 6.36364H16.1053L11.3684 1.81818V6.36364Z" />
                        </mask>
                        <path d="M1.89474 20C1.37368 20 0.92779 19.8221 0.557053 19.4664C0.185684 19.11 0 18.6818 0 18.1818V5.45455H1.89474V18.1818H12.3158V20H1.89474ZM5.68421 16.3636C5.16316 16.3636 4.71726 16.1858 4.34653 15.83C3.97516 15.4736 3.78947 15.0455 3.78947 14.5455V1.81818C3.78947 1.31818 3.97516 0.89 4.34653 0.533636C4.71726 0.177879 5.16316 0 5.68421 0H12.3158L18 5.45455V14.5455C18 15.0455 17.8146 15.4736 17.4439 15.83C17.0725 16.1858 16.6263 16.3636 16.1053 16.3636H5.68421ZM11.3684 6.36364H16.1053L11.3684 1.81818V6.36364Z" fill="#24232B" stroke="#A6FEB0" stroke-width="4" mask="url(#path-2-inside-1_0_1)" />
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
                    onChange={val => { handleChange(val) }}
                />
                <button style={{ 'backgroundColor': `${uppercase}` }} className={styles.uppercase} onClick={UpperCase}></button><p className={styles.text1}>Include Uppercase Letters</p>
                <button style={{ 'backgroundColor': `${lowercase}` }} className={styles.lowercase} onClick={LowerCase}></button><p className={styles.text2}>Include Lowercase Letters</p>
                <button style={{ 'backgroundColor': `${numbers}` }} className={styles.numbers} onClick={Numbers}></button><p className={styles.text3}>Include Numbers</p>
                <button style={{ 'backgroundColor': `${symbols}` }} className={styles.symbols} onClick={Symbols}></button><p className={styles.text4}>Include Symbols</p>

                <div className={styles.strength}>
                    <p className={styles.strengthTitle}>STRENGTH</p>
                    <div style={{ "backgroundColor": `${barCol1}` }} className={styles.strengthBar1}></div>
                    <div style={{ "backgroundColor": `${barCol2}` }} className={styles.strengthBar2}></div>
                    <div style={{ "backgroundColor": `${barCol3}` }} className={styles.strengthBar3}></div>
                    <div style={{ "backgroundColor": `${barCol4}` }} className={styles.strengthBar4}></div>
                </div>
                <button className={styles.generate} onClick={generatePassword}><b style={{ fontFamily: "monospace", fontSize: "15px" }}>❖ Generate ❖</b></button>
            </div>
        </div>
    );
}


