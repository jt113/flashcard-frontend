import React, { Component } from 'react'
import UserDataService from '../../service/UserDataService';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            jumbotronMinHeight: 900,
            widthHeightRatio: 0.6,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
        const { innerHeight: height } = window;
        console.log("height: " + height);
        this.setState({ jumbotronMinHeight: height });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        UserDataService.ifUsernameIsTaken(user.username)
            .then(response => {
                if (response.data.id === 0) {
                    console.log("username does NOT exist")
                    UserDataService.addUser(user)
                        .then(response => console.log(JSON.stringify(response.data)))
                        .then(this.props.history.push(`/`));
                }

                else {
                    console.log("username EXISTS!!")
                    this.setState({ error: "Username already exists." })
                }
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container clear-top" id="main">
                <br />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="jumbotron  ml-auto mr-auto"
                            style={{
                                textAlign: "center",
                                backgroundColor: "white",
                                minHeight: `${this.state.jumbotronMinHeight * 0.85}px`,
                                maxWidth: `${this.state.jumbotronMinHeight * this.state.widthHeightRatio}px`
                            }}>
                            <h1 style={{ color: "Purple" }}>Sign Up</h1>
                            <br />
                            <form onSubmit={this.handleSubmit} style={{marginTop: "80px"}}>
                                <div className="row form-group justify-content-center p-2 ">
                                    <label htmlFor="username" className="col-xs-12 col-md-4">Username</label>
                                    <input className="form-control col-xs-12 col-md-5"
                                        type="text"
                                        name="username"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row form-group justify-content-center p-2 ">
                                    <label htmlFor="password" className="col-xs-12 col-md-4">Password</label>
                                    <input className="form-control col-xs-12 col-md-5"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div className="row form-group justify-content-center p-2">
                                    <button className="button" type="submit">Sign up</button>
                                </div>
                                {this.state.error && (<p style={{ color: "red" }}>{this.state.error}</p>)}
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default SignUpComponent;