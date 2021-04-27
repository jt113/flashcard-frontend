import React, { Component } from 'react'
import UserDataService from '../../service/UserDataService';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
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
                if (response.data.id == 0) {
                    console.log("username does NOT exist")
                    UserDataService.addUser(user)
                        .then(response => console.log(JSON.stringify(response.data)))
                        .then(this.props.history.push(`/`));
                }

                else {
                    console.log("username EXISTS!!")
                    this.setState({error: "Username already exists."})
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
                        <div className="jumbotron" style={{ textAlign: "center", backgroundColor: "white" }}>
                            <h1 style={{ color: "Blue" }}>Sign Up</h1>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control"
                                        type="text"
                                        name="username"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <button type="submit">Sign up</button>
                                </div>
                                {this.state.error && (<p style={{color: "red"}}>{this.state.error}</p>)}
                            </form>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}
export default SignUpComponent;