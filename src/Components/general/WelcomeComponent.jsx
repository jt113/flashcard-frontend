import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserDataService from '../../service/UserDataService';
import Cookies from 'js-cookie'
import FlashcardImage from'./flashcard-img.jpg';
// props {
//     setIsLoggedIn(boolean): function
// }
class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            jumbotronMinHeight: 900,
            widthHeightRatio: 0.6,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
        const { innerHeight: height } = window;
        console.log("height: " + height);
        this.setState({ jumbotronMinHeight: height });
        var loggedInUser = Cookies.get('username');
        if (loggedInUser !== undefined) {
            this.props.history.push(`/home`);
            this.props.setIsLoggedIn(true);
        }
    }
    handleSubmit(event) {
        console.log(JSON.stringify(this.state));
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        UserDataService.ifCredentialsMatch(user)
            .then(response => {
                console.log("response.data: " + JSON.stringify(response.data));
                if (response.data.id === 0) {
                    this.setState({ error: "Username or password is incorrect" });
                }
                else {
                    this.props.setIsLoggedIn(true);
                    var inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
                    Cookies.set('username', response.data.username, { expires: inOneHour });
                    this.props.history.push(`/home`);
                }
            })
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container clear-top" id="main">
                <div className="row justify-content-center mt-3">
                    <br />
                    <div className="col-md">
                        <div className="jumbotron ml-auto mr-auto" style={{
                            textAlign: "center",
                            backgroundColor: "white",
                            minHeight: `${this.state.jumbotronMinHeight * 0.85}px`,
                            maxWidth: `${this.state.jumbotronMinHeight * this.state.widthHeightRatio}px`
                        }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <h2 style={{ color: "Purple" }}>Welcome to Flashcard App!!!</h2>
                                </div>
                                <div className="row justify-content-center">
                                    <img src={FlashcardImage} width="30%" alt="flashcards"/>
                                </div>
                                
                                <div style={{ marginTop: "20px" }}>
                                    <div className="row justify-content-center">
                                        <h3 className="text-color-primary" style={{ color: "Purple", marginBottom: "15px"}}>Sign in</h3>
                                    </div>

                                    <div className="row  justify-content-center" >
                                        <form onSubmit={this.handleSubmit} >
                                            <div className="row form-group justify-content-center p-2">
                                                <label htmlFor="username" className="col-xs-12 col-md-4">Username</label>

                                                <input type="text" name="username" className="col-xs-12 col-md-8" onChange={this.handleChange} />
                                            </div>

                                            <div className="row form-group justify-content-center p-2">
                                                <label htmlFor="password" className="col-xs-12 col-md-4">Password</label>
                                                <input type="password" name="password" className="col-xs-12 col-md-8" onChange={this.handleChange} />
                                            </div>
                                            <div className="row form-group justify-content-center">
                                                <button className="button" type="submit">Login</button>
                                                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}

                                            </div>
                                            <p>Don't have a username?</p>
                                            <Link to="/signup">Sign Up</Link>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <br />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WelcomeComponent;