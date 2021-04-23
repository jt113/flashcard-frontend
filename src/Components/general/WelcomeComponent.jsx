import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {

    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
    }
    render() {
        return (




                <div className="container clear-top"  id="main">

                    <div className="row justify-content-center">
                        <br />
                        <div className="col-md-8">
                            <div className="jumbotron" style={{ textAlign: "center", backgroundColor: "white" }}>
                                <h1 style={{ color: "Blue" }}>Welcome to Flashcard App!!!</h1>
                                <br />
                                <form >
                                    Username <input type="text" />
                                    <br />
                                Password <input type="password" />
                                    <br />
                                    <button type="submit">Login</button>
                                    <br />
                                    <p>Don't have a username?</p>
                                    <Link to="/signup">Sign Up</Link>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

        );
    }
}
export default WelcomeComponent;