import Cookies from 'js-cookie';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// props: {
// isLoggedIn: boolean
// setIsLoggedIn(boolean): function
// }
class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(){
        Cookies.remove("username");
        this.props.setIsLoggedIn(false);
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {!this.props.isLoggedIn ? (<li><Link className="nav-link" to="/">Login</Link></li>) :
                            (<li><Link className="nav-link" onClick={this.handleLogoutClick} to="/goodbye">Logout</Link></li>)}

                        {this.props.isLoggedIn && (<li><Link className="nav-link" to="/home">Flashcards</Link></li>)}

                        {/* <li><Link className="nav-link" to="/study">Study</Link></li>
                        <li><Link className="nav-link" to="/manage">Manage</Link></li> */}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default HeaderComponent;