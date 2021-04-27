import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserDataService from '../../service/UserDataService';
import Cookies from 'js-cookie'
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
        const { innerWidth: width, innerHeight: height } = window;
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
                if (response.data.id == 0) {
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
                    <div className="col-auto">
                        <div className="jumbotron" style={{ textAlign: "center",
                         backgroundColor: "white", minHeight: `${this.state.jumbotronMinHeight * 0.85}px`,
                         maxWidth: `${this.state.jumbotronMinHeight* this.state.widthHeightRatio}px` }}>
                            <h1 style={{ color: "Blue" }}>Welcome to Flashcard App!!!</h1>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="row form-group justify-content-center p-2">
                                    <label htmlFor="username" className="col-xs-12 col-md-3">Username</label>

                                    <input type="text" name="username" className="col-xs-12 col-sm-5" onChange={this.handleChange} />
                                </div>

                                <div className="row form-group justify-content-center p-2">
                                    <label htmlFor="password" className="col-xs-12 col-md-3">Password</label>
                                    <input type="password" name="password" className="col-xs-12 col-sm-5" onChange={this.handleChange} />
                                </div>
                                <div className="row form-group justify-content-center">
                                    <button type="submit">Login</button>
                                    {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}

                                </div>
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