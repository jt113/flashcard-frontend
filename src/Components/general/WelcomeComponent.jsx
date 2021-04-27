import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserDataService from '../../service/UserDataService';
import Cookies from 'js-cookie'
// props {
//     setIsLoggedIn: function
// }
class WelcomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
        var loggedInUser = Cookies.get('username');
        if(loggedInUser !== undefined){
            this.props.history.push(`/home`);
            this.props.setIsLoggedIn(true);
        }
    }
    handleSubmit(event){
        console.log(JSON.stringify(this.state));
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        UserDataService.ifCredentialsMatch(user)
            .then(response => {
                console.log("response.data: " + JSON.stringify(response.data));
                if(response.data.id == 0){
                    this.setState({error: "Username or password is incorrect"});
                }
                else{
                    this.props.setIsLoggedIn(true);
                    var inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
                    Cookies.set('username', response.data.username, { expires: inOneHour});
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
                <div className="container clear-top"  id="main">
                    <div className="row justify-content-center">
                        <br />
                        <div className="col-md-8">
                            <div className="jumbotron" style={{ textAlign: "center", backgroundColor: "white" }}>
                                <h1 style={{ color: "Blue" }}>Welcome to Flashcard App!!!</h1>
                                <br />
                                <form onSubmit={this.handleSubmit}>
                                    Username <input type="text" name="username" onChange={this.handleChange}/>
                                    <br />
                                Password <input type="password" name="password" onChange={this.handleChange}/>
                                    <br />
                                    <button type="submit">Login</button>
                                    <br />
                                    {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}
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