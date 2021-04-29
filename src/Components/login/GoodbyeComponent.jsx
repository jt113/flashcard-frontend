import React from 'react';
import goodbyeImage from './goodbye.png'
class GoodbyeComponent extends React.Component {
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
    }
    render() {
        return (
            <div className="container clear-top" id="main">
                <br />
                <div className="row justify-content-center">
                    <h1 className="text-color-primary" >Goodbye. Thank you for using our app!</h1>

                </div>
                <div className="row justify-content-center">
                    <img src={goodbyeImage} width="40%" alt="goodbye emoji" />
                </div>
            </div>
        );
    }
}
export default GoodbyeComponent;