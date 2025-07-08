import { useState, useEffect } from "react";
import Heading from "./Heading";
import { Button } from "@heroui/react";
import { Link, Routes, Route } from "react-router-dom";

function Header(){
    const [message, setMessage] = useState("Hello World");

    // const alertUser = () => {
    //     alert("DID MOUNT")
    // }

    // // componentDidMount
    // useEffect(() => {
    //     alertUser();

    //     return () => {
    //         // componentWillUnmount
    //         alert("WILL UNMOUNT")
    //     }
    // }, []); // ARRAY HARUS KOSONG

    // // componentDidUpdate and componentDidMount
    // useEffect(() => {
    //     alert("DID UPDATE");
    // }, [message]); // array of dependecies

    const changeMessage = () => {
        setMessage("State Changed");
    }

    return(
        <header style={{
            backgroundColor: "lightBlue",
            padding: "4px",
            margin: "5px",
            fontFamily: "sans-serif",
            textAlign: "center"
        }}>
            <Heading title="Ini props dari heading"/>
            {/* <p>{message}</p>
            <Button onClick={changeMessage}>Change Message</Button>
            <Link to="/">To Sign Up Page</Link> */}
        </header>
    );
}

export default Header;