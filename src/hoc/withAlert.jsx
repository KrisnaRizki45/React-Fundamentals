import React from "react";

export const withAlert = (InnerComponent) => {
    class WrapperComponent extends React.Component {
        // componentDidMount() {
        //     alert("Component Mounted!");
        // }
        render() {
            return(
                <InnerComponent {...this.props} propsTambahan="Halo ini hoc"/>
            )
        }
    }

    return WrapperComponent;
};