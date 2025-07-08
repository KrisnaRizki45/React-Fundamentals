import React, { useContext } from "react";
import { SignUpContext } from "../context/SignUpContext";
import { Button } from "@heroui/react"

// const Heading = () => {
//     const signUpContext = useContext(SignUpContext);

//     return <h1 className="bg-orange-300 p-4">{signUpContext.title}</h1>;
// }

class Heading extends React.Component {
    static contextType = SignUpContext;

    render() {
        return (
        <>
            <h1>{this.context.title}</h1>
            <Button color="secondary" onClick={() => this.context.setTitle("Context Change")}>Change Title</Button>
        </>
        )
    }
}

export default Heading;