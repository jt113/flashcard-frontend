import React, { Component } from 'react'

class SignUpComponent extends Component {
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
    }
    render() {
        return (
            <div className="container clear-top" id="main">
                <br />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="jumbotron" style={{ textAlign: "center", backgroundColor: "white" }}>
                            <h1 style={{ color: "Blue" }}>Sign Up</h1>
                            <br />
                            <form >
                                Username <input type="text" />
                                <br />
                    Password <input type="password" />
                                <br />
                                <button type="submit">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default SignUpComponent;