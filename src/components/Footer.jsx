import React from "react";
import "../styles/footer.css";
import { Button } from "@heroui/react";
import { withBackground } from "../hoc/withBackground";
import { withAlert } from "../hoc/withAlert";

class Footer extends React.Component{
    state = {
        message: "Hello World",
    };

    changeMessage = () => {
        this.setState({ message: "State Change"})
    }

    // componentDidMount() {
    //     this.alertUser();
    // }

    // alertUser = () => {
    //     alert("Did MOUNT");
    // }

    // componentDidUpdate() {
    //     alert("DID UPDATE");
    //     alert(this.state.message)
    // }

    render(){
        return(
            <footer>
                <h2 className="footer-text">Ini Footer</h2>
                <p className="font-bold" data-testid="props-message">{this.props.message}</p>
                {/* <p className="font-bold">{this.props.propsTambahan}</p> */}
                <p className="text-slate-800 font-extrabold" data-testid="state-message">{this.state.message}</p>
                <Button color="secondary" onClick={this.changeMessage} data-testid="change-message-btn">Changes Message</Button>
            </footer>
        )
    }
}

export default withAlert(withBackground(Footer));